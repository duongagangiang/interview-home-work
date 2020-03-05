import express from 'express'
import PostController from '../controllers/post'

const router = express.Router()

router.use((req, res, next) => {
    console.log('Post router. Time: ', Date.now())
    next()
})

router.get('/', PostController.getPosts)
router.post('/', PostController.create)
router.put('/:id', PostController.update)
router.delete('/:id', PostController.delete)

export default router
