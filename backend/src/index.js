const express = require("express")
const moongose = require('mongoose')
const app = express()
const path = require('path')
const cors = require('cors')
const Port = 3333;

const server = require('http').Server(app)
const io = require('socket.io')(server)

//config
 //mongoose
 moongose.connect('mongodb+srv://semana:semana@cluster0-4kq1d.mongodb.net/test?retryWrites=true&w=majority',{
     useNewUrlParser: true,
     useUnifiedTopology: true,
 })

app.use((req,res,next)=>{
    req.io = io;

    next()
})

app.use(cors())

app.use('/files',express.static(path.resolve(__dirname,'..','uploads')))

app.use(require('./config/routes'))

server.listen(Port,()=> console.log(`Servidor rodando na porta: ${Port}`));