import bcryptjs from 'bcryptjs'
import { mongoose, Schema, autoIncrement } from '../../config'


const userSchema = new Schema({
    id: {
      type: Number,
      unique: true,
      default: 1
    },
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 6
    },
    name: {
      type: String,
      trim: true,
      required: true
    },
    dob: {
      type: String,
      trim: true,
      required: true
    }
  }, 
  { timestamps: true }
)

userSchema.pre('save', function (next) {
    const user = this;
    // Only hash password if it has beed modified or is new
    if (!user.isModified('password')) return next();
    // for new password
    if (user.password) {
      bcryptjs.genSalt(10, (err, salt) => {
        bcryptjs.hash(user.password, salt, (err, hash) => {
          if (err) return next(err);
          user.password = hash;
          next(err);
        });
      });
    }
    next();
})

userSchema.plugin(autoIncrement, {id: 'userid', inc_field: 'id'})

const ModelUser = mongoose.model('users', userSchema)
export default ModelUser
