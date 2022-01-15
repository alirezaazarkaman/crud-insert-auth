const {
    MongoClinet,
    url,
    User
} = require('../helper/index-helper');

module.exports = {
    insert(UserData, req, res) {
        MongoClinet.connect(url, (error, db) => {
            if (error) {
                throw error
            }
            const dbo = db.db('shoping');
            dbo.collection('users').findOne({
                UserName: UserData
            }, (error, result) => {
                if (error) {
                    throw error
                }
                if (result) {
                    const user = new User({
                        UserName: req.body.username,
                        UserPassword: req.body.password,
                        UserFamily: req.body.family
                    });
                    try {
                        createUser(user);
                        req.session.username = req.body.username
                        res.render('pages/index', {
                            user: "user created"
                        });
                        console.log(req.session)
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    res.render('pages/create-post', {
                        user: "user  not created"
                    })
                }
            })
        })
    }
}