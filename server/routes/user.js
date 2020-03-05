import express from 'express'
import UserController from '../controllers/user'

const router = express.Router()

router.use((req, res, next) => {
    console.log('User router. Time: ', Date.now())
    next()
})

router.post('/', UserController.createUser)
router.post('/sign-in', UserController.authenticate)

export default router
