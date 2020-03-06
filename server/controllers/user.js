import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from '../../config'
import ModelUser from '../models/user'

const UserController = {
    authenticate: (req, res, next) => ModelUser.findOne(
        { username: req.body.username },
        (err, userInfo) => {
    
          if (err) {
            res.status(500).json({
              message: 'Invalid username or password!!!',
              data: null
            });
            return;
          } else if (userInfo) {
            {
              bcrypt.compare(req.body.password, userInfo.password)
              .then(result => {
                if (result) {
                  userInfo.password = '';
                  // token expire in 7 days
                  const token = jwt.sign(
                    { userInfo },
                    config.secretKey,
                    { expiresIn: 604800 }
                  )
                  res.status(200).json({
                    userInformation: userInfo,
                    token: token
                  })
                  return
                } else {
                  res.status(500).json({
                    message: 'Invalid username or password!!!',
                    token: null
                  });
                  return
                }
              }).catch(error => {
                console.log(error)
              })
            }
          } else {
            res.status(500).json({
              message: 'Invalid username or password!!!',
              data: null
            })
            return
          }
        }
    ),
    createUser: (req, res, next) => {
      let reqUser = req.body;
      const user = new ModelUser(reqUser);
      ModelUser.findOne({username: reqUser.username}).exec((err, data) => {
        if (err) return;
        if (data) return res.status(400).json({"message": "User is existed"})
        ModelUser.create(user, (error, result) => {
          if (error) {
            res.status(400).json({"message": "User is existed!"});
            return;
          }
          res.status(200).json({message: 'User added successfully!!!'});
          return;
        }) 
      })
    }
}

export default UserController
