const axios = require('axios')

class animalController {
    static getFox(req, res){
        axios.get('https://randomfox.ca/floof/')
        .then(response => {
        res.status(200).send(response.data)
        })
        .catch(error => {
        console.log(error)
        })
    }

    static getDog(req, res){
        axios.get('https://random.dog/woof.json')
        .then(response => {
            res.status(200).send(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    static getCat(req, res){
        axios.get('https://api.thecatapi.com/v1/images/search?', {
            params : {
                'limit' : 3
            },
            headers : {
                'x-api-key' : '38031b4f-2a2f-4611-b020-57bc2dc6479d'
            }
        })
        .then(response => {
            res.status(200).send(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
}


module.exports = animalController



