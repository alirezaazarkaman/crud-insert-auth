const {
    bodyparser,
    flash,
    session,
    cookieParser,
    port,
    mongoose
} = require('../helper/index-helper')


module.exports = {
    config(app,express) {
        // parse application/x-www-form-urlencoded
        app.use(bodyparser.urlencoded({
            extended: false
        }))

        // parse application/json
        app.use(bodyparser.json());

        //parse application/cookie
        app.use(cookieParser());

        //set ejs view engine
        app.set('view engine', 'ejs');

        //set public route
        app.use(express.static('public'));

        //session option
        app.use(session({
            secret: "Alireza Azarkaman",
            resave: false,
            saveUninitialized: true,
            cookie: {
                secure: true
            },
            cookie: {
                maxAge: 60000
            }
        }));

        //middleware of flash 
        app.use(flash());
    },
    host(app) {
        app.listen(port, () => {
            console.log(`this app run on ${port}`)
        })
    },
    mongoose() {
        const db_username = "";
        const db_password = "";
        const url = "mongodb://localhost:27017"
        const db_name = "shoping"
        mongoose.connect(utl + db_name, {});
    }
}