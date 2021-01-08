const { verifyToken } = require('../helpers/jsonwebtoken')
const { User } = require('../models')

async function authenticate(req, res, next){
    try {
        let decoded = verifyToken(req.headers.access_token)
        let user = await User.findOne({
            where: { email: decoded.email }  
        })
            if(user){
                req.user = user
                next()
            } else {
                next({ name : 'Unauthorized'})
            }   
    } catch (err) {
        next(err)
    }
}

module.exports = {
    authenticate
}
