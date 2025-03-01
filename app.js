// if (process.env.NODE_ENV === 'development') {
    
// }
require('dotenv').config()

const cors = require('cors')
const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const { errorHandler } = require('./middlewares/errorHandler')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use('/', routes)
app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})