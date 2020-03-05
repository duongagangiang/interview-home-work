import mongoose from 'mongoose'
import {PORT, MONGODB_URL, SECRET_KEY} from './server'
import AutoIncrementFactory from 'mongoose-sequence'

export default {
    port: PORT || 8080,
    secretKey: SECRET_KEY
}
mongoose.set('useFindAndModify', false)
mongoose.connect(
    MONGODB_URL,
    {
        useNewUrlParser: true,
        useCreateIndex: true
    }
)

const db = mongoose.connection

const autoIncrement = AutoIncrementFactory(db)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const { Schema } = mongoose

export { mongoose, db, Schema, autoIncrement }
