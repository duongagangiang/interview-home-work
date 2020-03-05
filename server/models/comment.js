import { mongoose, Schema, autoIncrement } from '../../config'

const commentSchema = new Schema({
    id: {
      type: Number,
      unique: true,
      default: 1
    },
    owner: {
      type: Number,
      required: true
    },
    post: {
      type: Number,
      required: true
    },
    content: {
      type: String,
      trim: true,
      required: true
    }
  }, 
  { timestamps: true }
)

postSchema.plugin(autoIncrement, {id: 'commentId', inc_field: 'id'})
const ModelComment = mongoose.model('comments', commentSchema)
export default ModelComment
