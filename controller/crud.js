const {
    MongoClinet,
    url
} = require('../helper/index-helper')

module.exports = {
    createUser(UserData, callback) {
        try {
            UserData.save(callback);
            console.log('user data is created')
        } catch (error) {
            console.log(`this porject have error ${error}`)
        }
    },
    deleteUser(UserData) {
        try {
            MongoClinet.connect(url, (error, db) => {
                if (error) {
                    throw error
                }
                const dbo = db.db('shoping');
                dbo.collection('users').deleteOne({
                    UserName: UserData
                }, (error, result) => {
                    if (error) {
                        throw error
                    };
                    console.log(result);
                    db.close();
                });
            });
        } catch (error) {
            console.log(error)
        }
    },
    updateUser(UserData, newquery) {
        MongoClinet.connect(url, (error, db) => {
            if (error) {
                throw error
            }
            const dbo = db.db('shoping')
            dbo.collection('users').updateOne(UserData, newquery, (error, result) => {
                if (error) {
                    throw error
                };
                console.log(result);
                console.log('user update');
                db.close();
            })
        })
    },
    createPOst(PostData, callback) {
        try {
            PostData.save(callback);
            console.log('')
        } catch (error) {
            console.log(error);
        }
    },
    deletePost(PostData) {
        try {
            MongoClinet.connect(url, (error, db) => {
                if (error) {
                    throw error
                }
                const dbo = db.db('shoping');
                dbo.collection('posts').deleteOne({
                    _id: PostData
                }, (error, result) => {
                    if (error) {
                        throw error
                    };
                    console.log(result);
                    db.close();
                });
            });
        } catch (error) {
            console.log(error)
        }
    },
    PostUpdate(PostData, UpdatePost) {
        MongoClinet.connect(url, (error, db) => {
            if (error) {
                throw error
            }
            const dbo = db.db('shoping')
            dbo.collection('posts').updateOne(PostData, UpdatePost, (error, result) => {
                if (error) {
                    throw error
                };
                console.log(result);
                console.log('post update');
                db.close();
            })
        })
    }
}