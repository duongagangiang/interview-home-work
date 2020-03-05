import express from 'express'
import {PORT} from '../config/server'
import cors from 'cors'
import bodyParser from 'body-parser'
// IMPORT ROUTER
import router from './routes'
import postRouter from './routes/post'
import commentRouter from './routes/comment'
import userRouter from './routes/user'


const path = require('path')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/v1', router)
app.use('/v1/posts', postRouter)
app.use('/v1/comments', commentRouter)
app.use('/v1/users', userRouter)

app.listen(PORT, () => console.log(`Server listen on PORT ${PORT}`))
