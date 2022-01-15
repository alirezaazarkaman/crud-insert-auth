const {
    check
} = require('express-validator');

module.exports = {
    validate(username, password, family) {
        check(username).isEmail().normalizeEmail()
            .withMessage('email must bbe contain @')
        check(password)
            .isLength({
                min: 8
            })
            .withMessage('must be at least 8 chars long')
            .matches(/\d/)
            .withMessage('must contain a number')
        check(family).isEmpty()
            .isLength({
                min: 6,
                max: 50
            })
            .withMessage('must be at last 6 chars long and shorter 50 chars long ')
    }
}