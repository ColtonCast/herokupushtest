require('dotenv').config()
const express = require('express'),
    hbs = require('express-handlebars'),
    bodyParser = require('body-parser')

const app = express()

// Port to listen on
const PORT = process.env.PORT || 8080

// Static directory for public
app.use(express.static(__dirname + '/public'))

// Use handlebars
app.engine('handlebars', hbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routes
const routes = require('./controllers/index')

app.use(routes)

// Start server
app.listen(PORT, () => {
    console.log(`The codebusters app is running on http://localhost:${PORT}`)
})

module.exports = app
