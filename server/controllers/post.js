import ModelPost from '../models/post'
import jwt from 'jsonwebtoken'
import config from '../../config'

const PostController = {
    getPosts: (req, res, next) => {
      ModelPost.find().sort({createdAt: -1}).exec((error, data) => {
          if (error) next(error);
          res.status(200).json(data);
          return;
      });
    },
    create: (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) {
            res.status(401).json({ message: 'No token provided' });
            return;
        }
        jwt.verify(token.split(' ')[1], config.secretKey, null, (err, decoded) => {
          if (err) {
            res.status(501).json({ message: 'Failed to authenticate token.' });
            return;
          }
          ModelPost.create(new ModelPost(req.body), (err, result) => {
            if (err) next(err);
            res.status(200).json({ message: 'Post added successfully!!!', data: null });
            return;
          });
        });
    },
    getPostById: (req, res, next) => {
        const pid = req.params.id;
        ModelPost.findOne({id: pid}).exec((error, data) => {
            if (error) next(error);
            res.status(200).json(data);
            return
        })
    },
    update: (req, res, next) => {
      const token = req.headers['authorization']
      const id = req.params.id
      console.log(id)
      if (!token) {
        res.status(401).json({ message: 'No token provided' })
        return
      }
      jwt.verify(token.split(' ')[1], config.secretKey, null, (err, decoded) => {
        if (err) {
          res.status(501).json({ message: 'Failed to authenticate token.' });
          return;
        }
        const updatedPost = new ModelPost(req.body)
        const upsertData = updatedPost.toObject()
        delete upsertData._id
        delete upsertData.id
        ModelPost.findOneAndUpdate({id: id}, upsertData, {upsert: true}, (err, result) => {
          if (err) next(err);
          res.status(200).json({ message: 'Post updated successfully!!!', data: null });
          return;
        })
      })
    },
    delete: (req, res, next) => {
      const token = req.headers['authorization']
      const id = req.params.id
      if (!token) {
        res.status(401).json({ message: 'No token provided' })
        return
      }
      jwt.verify(token.split(' ')[1], config.secretKey, null, (err, decoded) => {
        if (err) {
          res.status(501).json({ message: 'Failed to authenticate token.' });
          return;
        }
        ModelPost.findOneAndDelete({id: id}, (err, result) => {
          if (err) next(err);
          res.status(200).json({ message: 'Post deleted successfully!!!', data: null });
          return;
        })
      })
    }
}

export default PostController
