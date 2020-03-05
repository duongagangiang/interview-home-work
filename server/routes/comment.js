import express from 'express'

const router = express.Router()

router.use((req, res, next) => {
    console.log('Comment router. Time: ', Date.now())
    next()
})

export default router
