const express = require('express'),
    middleware = require('../middleware/middleware'),
    { User, Game } = require('../models/index')

router = express.Router()

// GET home page
router.get('/', (req, res, next) => {
    console.log('logged in?', req.isAuthenticated())
    
    Game.findAll({
        include: [
            User
        ]
    })
    .then(result => {
        result.forEach(game => {
            let highScore = game.dataValues.total_score
            let playerName = game.dataValues.user.dataValues.fullname
            return highScore, playerName
        })
    return res.render('index', { game: result })
    })
 })

// POST code challenge
router.post('/code', middleware.isLoggedIn, (req, res, next) => {
    Game.create({ userId: req.user.id })
    .then(result => {
        if (!result) {
            req.flash('Game could not be created.')
            res.redirect('/')
        }
        const gameId = result.dataValues.id
        res.redirect('/challenge/' + gameId + '/challenge1')
    })
    .catch(err => {
        req.flash('error', err)
        return res.redirect('/')
    })
})

// GET code challenge1 page
router.get('/challenge/:gameId/challenge1', middleware.isLoggedIn, (req, res) => {
    // console.log('req params', req.params + 'end of req params')
    // console.log('logged in user', req.user.username)
    res.render('challenge1')
})

// GET code challenge2 page
router.get('/challenge/:gameId/challenge2', middleware.isLoggedIn, (req, res) => {
    res.render('challenge2')
})

// GET code challenge3 page
router.get('/challenge/:gameId/challenge3', middleware.isLoggedIn, (req, res) => {
    res.render('challenge3')
})

// GET code challenge4 page
router.get('/challenge/:gameId/challenge4', middleware.isLoggedIn, (req, res) => {
    res.render('challenge4')
})

router.get('/challenge/:gameId/challenge5', middleware.isLoggedIn, (req, res) => {
    res.render('challenge5')
 })
 
 router.get('/challenge/:gameId/challenge6', middleware.isLoggedIn, (req, res) => {
    res.render('challenge6')
 })
 
 router.get('/challenge/:gameId/challenge7', middleware.isLoggedIn, (req, res) => {
    res.render('challenge7')
 })
 
 router.get('/challenge/:gameId/challenge8', middleware.isLoggedIn, (req, res) => {
    res.render('challenge8')
 })
 
 router.get('/challenge/:gameId/challenge9', middleware.isLoggedIn, (req, res) => {
    res.render('challenge9')
 })
 
 router.get('/challenge/:gameId/challenge10', middleware.isLoggedIn, (req, res) => {
    res.render('challenge10')
 })

// Catch all
router.get('*', (req, res) => {
    req.flash('error', 'Ooooops nothing to see here!')
    res.redirect('/')
})

module.exports = router