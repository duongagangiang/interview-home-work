import ModelComment from '../models/comment'
import config from '../../config'

const CommentController = {
    getCommentsByPostId: (req, res, next) => {
        const id = req.query['pid'];
        if (id) {
            ModelComment.find({ post: id }).exec((error, data) => {
                
                if (error) next(error);
                const comments = [];
                data.forEach(comment => {
                    comment = comment.toObject();
                    const date = new Date(comment.updatedAt);
                    const time = date.toLocaleString('vi-VN', { timeZone: 'Asia/Bangkok' });
                    const resData = {
                        "id": comment.id,
                        "content": comment.content,
                        "owner": comment.owner,
                        "time": time
                    };
                    comments.push(resData);
                })
                res.status(200).json(comments);
                return;
            });
        }
    },
    createNewComment: (req, res, next) => {
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
          ModelComment.create(new ModelComment(req.body), (err, result) => {
            if (err) next(err);
            else {
                res.json({ status: 200, message: 'Comment added successfully!!!', data: null });
                return;
            }
          });
        });
    },
    deleteCommentById: (req, res, next) => {
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
          const id = req.params.id;
          ModelComment.deleteOne({id: id}).exec((err, result) => {
              if (err) next(err)
              else {
                res.status(200).json(result);
                return;
              }
          })
        });
    },
    updateCommentId:(req, res, next) => {
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
          const newComment = new ModelComment(req.body);
          const upsertData = newComment.toObject();
          delete upsertData._id; 
          ModelComment.findOneAndUpdate({id: newComment.id}, upsertData, {upsert: true}).exec((err, result) => {
              if (err) next(err)
              else {
                res.status(200).json(result);
                return;
              }
          })
        });
    }
}

export default CommentController
