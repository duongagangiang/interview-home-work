const express = require('express')
const app = express()
const path = require('path')
const {PORT} = require('../config')

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => console.log('App working'))

app.listen(PORT, () => console.log(`Server listen on PORT ${PORT}`))
