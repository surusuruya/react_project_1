const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin.123@cluster0.l6pncpg.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))