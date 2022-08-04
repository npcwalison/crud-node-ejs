const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);


const databases = [
  {
    nome: "Guilherme Walison Lima Santana",
    matricula: '4862458945'
  },
]

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '/public')))


app.get('/', (req, res)=> {
  res.render(path.join(__dirname, 'pages/index'), {databases})
})

app.post('/data', (req, res)=> {
  res.render(path.join(__dirname, 'pages/data'))
  databases.push({
    nome: req.body.datanome,
    matricula: req.body.datamatricula
  })
})


app.listen(port, ()=>{
  console.log(`Server Runing: http://localhost:${port}`)
})