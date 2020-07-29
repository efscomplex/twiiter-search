const express = require('express')
const cors = require('cors')
const trendingRouter = require('./routes/trending')
const app = express()

const PORT = 4000

app.use(cors())
app.use(express.json())

app.use('/trending', trendingRouter)

module.exports = () => {
   app.listen(PORT, () => console.log('Server listen on port ' + PORT))
}
