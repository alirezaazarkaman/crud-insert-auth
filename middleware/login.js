const {
    app,
    MongoClient,
    url,
    flash
} = require('../helper/index-helper')

app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
    res.render('pages/login');
});

app.post('/login', (req, res) => {
    if (req.session.username) {
        res.redirect('/');
    } else {
        MongoClient.connect(url, (error, db) => {
            if (error) {
                throw error
            }
            const dbo = db.db('shoping');
            dbo.collection('users').findOne({
                username: req.body.username
            }, (error, result) => {
                if (error) {
                    throw error
                }
                if (result) {
                    req.session.username = req.body.username;
                    req.flash('sucess', `welcome ${req.session.username}`)
                    res.render('pages/dashboard', {
                        flash: 'sucess'
                    })
                } else {
                    req.flash('failed', 'this user not register');
                    res.redirect('/insert')
                    console.log(req.flash)
                }
            });
        });
    }
})




module.exports = app;