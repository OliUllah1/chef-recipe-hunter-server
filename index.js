const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000

const allChefInfo = require('./data/chefInfo.json')

app.use(cors())

app.get('/',(req,res)=>{
    res.send(allChefInfo)
})

app.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const chefInfo = allChefInfo.find(chef => chef.id === id)
    res.send(chefInfo)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })