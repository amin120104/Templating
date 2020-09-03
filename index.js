const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'pug')
const port = 3000

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.post('*', urlencodedParser, function (req, res) {
  response = {  
    first_name:req.body.first_name,  
    last_name:req.body.last_name,
    template:req.body.template,
};  
console.log(response);  
res.render(response.template, response)
res.end();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})