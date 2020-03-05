import { mongoose, Schema, autoIncrement } from '../../config';

const postSchema = new Schema({
    id: {
        type: Number,
        required: true,
        default: 1
    },
    owner: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    tags: {
        type: [String],
        required: true
    }
}, { timestamps: true });

postSchema.plugin(autoIncrement, {id: 'postId', inc_field: 'id'})

const ModelPost = mongoose.model('posts', postSchema);

export default ModelPost;
