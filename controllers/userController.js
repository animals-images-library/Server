const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jsonwebtoken')

class UserController {
    static register(req, res) {
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
            .catch(err => {
                console.log(err)
                res.status(500).json({name: 'Internal Server Error'})
            })
    }

    static login(req, res) {
        const { email, password } = req.body
        User.findOne({
            where: { email }
        }) 
            .then(data => {
                if (!data) {
                    res.status(400)
                    // next({ name: 'Invalid Input' })
                } else {
                    if (comparePassword(password, data.password)) { 
                        let payload = {
                            id: data.id,
                            email: data.email
                        }
                        let access_token = generateToken(payload)
                        res.status(200).json({ access_token })
                    } else {
                        //passwordnya ga cocok
                        // next({ name: 'Invalid Input' })
                    }
                }
            })
            .catch(err => {
                // console.log(err)
                res.status(500).json({ message: 'Internal Server Errors'})
                // next(err)s
            })

    }
}

module.exports = UserController