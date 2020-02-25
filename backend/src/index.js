const express = require("express")
const app = express()
const moongose = require('mongoose')
const Port = 3333;

//config
 //mongoose
 moongose.connect('mongodb+srv://semana:semana@cluster0-4kq1d.mongodb.net/test?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
 })

app.use(require('./config/routes'))

app.listen(Port,()=> console.log(`Servidor rodando na porta: ${Port}`));