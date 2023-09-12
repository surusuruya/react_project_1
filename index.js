const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const { User } = require("./models/User");

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://admin:admin.123@cluster0.l6pncpg.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

// app.get('/', (req, res) => res.send('Hello!'))

app.post('/register', async (req, res) => {

  // 회원 가입 할 때 필요한 정보들을 client 에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.
  
  // body parser를 통해 body에 달린 정보를 가져온다.
  const user = new User(req.body)

  const result = await user.save().then(()=>{
    res.status(200).json({
      success: true
    })
  }).catch((err)=>{
    res.json({ success: false, err })
  })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))