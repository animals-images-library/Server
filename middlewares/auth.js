const { verifyToken } = require('../helpers/jsonwebtoken')
const { User } = require('../models')

function authenticate(req, res, next){
    try {
        let decoded = verifyToken(req.headers.access_token)
        // console.log(decoded)
        User.findOne({
            where: { email: decoded.email }  
        })
            .then(data => {
                if(!data) {
                    next({ name: 'Unauthorized' })
                } else {
                    req.user = data
                    next()
                }
            })
            .catch(next)
            
    } catch (err) {
        next(err)
    }
}

module.exports = {
    authenticate
}
