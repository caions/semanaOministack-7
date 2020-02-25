const express = require('express')
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('Legal')
})

module.exports = routes