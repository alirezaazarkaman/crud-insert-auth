const {app} = require('../helper/index-helper')

//set ejs view engine
app.set('view engine', 'ejs') ;

app.get('/', (req, res) => {
    res.render('pages/create-post')
})

module.exports = app 