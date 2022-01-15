const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserName: {
        type: String,
        min: 6,
        unique: true,
        trim: true
    },
    UserFamily: {
        type: String,
        min: 6,
        max: 50,
    },
    UserPassword: {
        type: String,
        minlength: 8
    },
    UserCasts: {
        type: String,
        default: 0
    }
});
const User = module.exports = mongoose.model('User', UserSchema);