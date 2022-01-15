const index = require('../middleware/index');
const insert = require('../middleware/user');
const login = require('../middleware/login')
module.exports = {
    routing(app) {
        app.get('/', index);
        app.post('/insert', insert);
        app.get('/login', login);
    }
}