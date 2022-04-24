const express = require('express')
const pupilRouter = require('./routes/pupilRoute')

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.use('/api', pupilRouter)
    
app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))