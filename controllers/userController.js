const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jsonwebtoken')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

class UserController {
    static register(req, res, next) {
        let input = {
            email: req.body.email,
            password: req.body.password
        }
        User.create(input)
            .then(data => {
                let result = {
                    id: data.id,
                    email: data.email
                }
                res.status(201).json(result)
            })
            .catch(next)
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: { email }
        }) 
            .then(data => {
                if (!data) {
                    // res.status(400)
                    next({ name: 'Invalid Input' })
                } else {
                    if (comparePassword(password, data.password)) { 
                        let payload = {
                            id: data.id,
                            email: data.email
                        }
                        let access_token = generateToken(payload)
                        res.status(200).json({ access_token })
                    } else {
                        next({ name: 'Invalid Input' })
                    }
                }
            })
            .catch(next)

    }

    static async googleLogin(req, res, next) {
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.body.googleToken,
                audience: process.env.GOOGLE_CLIENT_ID
            })
            const payload = ticket.getPayload()
            const findUser = await User.findOne({
                where: {
                    email: payload.email
                }
            })
            if(findUser) {
                const googleUser = {
                    id: payload.id,
                    email: payload.email
                }
                const access_token = generateToken(googleUser)
                res.status(200).json({access_token})
            }
            else {
                const newUser = {
                    email: payload.email,
                    password: process.env.PASSWORD
                }
                const createUser = await User.create(newUser)
                const googleUser = {
                    id: createUser.id,
                    email: createUser.email
                }
                const access_token = generateToken(googleUser)
                res.status(201).json({access_token})
            }
        }

        catch(error) {
            next(error)
        }
    }
}

module.exports = UserController