//application required
const {express,app,mongoose,port} = require('./helper/index-helper')
const {routing} = require('./router/user')
const {config} = require('./config/config')

//mongoose String connection
mongoose.connect("mongodb://localhost:27017/shoping", {}) ; 

//app config 
config(app,express) ; 

//all of routing  
routing(app) ; 

//set  port of application
app.listen(port, () => {
    console.log(`this app run on ${port}`)
})

module.exports = app;