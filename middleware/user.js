//require application

const {createUser} = require('../controller/crud');
const {app,User,MongoClient,url} = require('../helper/index-helper')
const {insert} = require('../controller/insert')

//set ejs as view engine
app.set('view engine', 'ejs')

//post requst for /insert to create user
/**
 * @param req 
 * @param res
 */
app.post('/insert', (req, res) => {
    const uesrdata = req.body.username
    insert(uesrdata,req,res)
});

module.exports = app;