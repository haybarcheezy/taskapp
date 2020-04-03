let express = require('express')

let app = express()


app.use(express.urlencoded({ extended: false }))

app.get(`/`, function(req, res) {
    res.send()
})

app.post(`/create-item`, function(req, res) {
    res.send()
})