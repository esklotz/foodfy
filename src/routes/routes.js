const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res){
    return res.render("parts/index")
})

routes.get('/about', function(req, res){
    return res.render("parts/about")
})

routes.get('/recepies', function(req, res){
    return res.render("parts/recepies")
})

module.exports = routes
