const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const allChefInfo = require('./data/chefInfo.json')

app.use(cors())
// app.get('/',(req,res)=>{
//     res.send('hello world')
// })
app.get('/',(req,res)=>{
    res.send(allChefInfo)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })