const express = require('express'),
   code = require('../code/code'),
   vm = require('vm'),
   middleware = require('../middleware/middleware'),
   { User, Game, Answer } = require('../models/index')

const router = express.Router()

// Test code
router.post('/api/challenge1', (req, res) => {
   console.log(req.params)
   const user_id = req.user.dataValues.id
   const input = req.body.code
   const addAnswer = code.addNumbers(2, 2)
   let result = vm.runInNewContext(input)
   let compare = result === addAnswer
   console.log('correct:', compare)
   console.log('reqeust:', req)
   if (compare) {
      Answer.create({
         score: 5,
         code: input,
      }, { where: { gameId: user_id }})
   } else {
      Game.update({
         userId: user_id
      }, { where: { id: user_id }})
   }
   req.flash('success', 'Answer submitted')
   res.redirect('/challenge2')
})

router.post('/api/challenge2', (req, res) => {
   const input = req.body.code
   const fizzBuzz = code.fizzBuzz(50)
   let result = vm.runInNewContext(input)
   let compare = result === fizzBuzz
   console.log('user code:', result)
   console.log('correct answer:', fizzBuzz)
   console.log('correct code?', compare)
   req.flash('success', 'Answer submitted')
   // res.redirect('/challenge3')
})

router.post('/api/challenge3', (req, res) => {
   const input = req.body.code
   const reverse = code.reverse("NodeJS")
   let result = vm.runInNewContext(input)
   let compare = result === reverse
   console.log('user code:', result)
   console.log('correct answer:', reverse)
   console.log('correct code?', compare)
   req.flash('success', 'Answer submitted')
   // res.redirect('/challenge4')
})

router.post('/api/challenge4', (req, res) => {
   const input = req.body.code
   const missingNum = code.missingNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20])
   let result = vm.runInNewContext(input)
   let compare = result === missingNum
   console.log('user code:', result)
   console.log('correct answer:', missingNum)
   console.log('correct code?', compare)
})

router.post('/api/challenge5', (req, res) => {
   const input = req.body.code
   const oddNum = code.oddNum()
   let result = vm.runInNewContext(input)
   let compare = result === oddNum
   console.log('user code:', result)
   console.log('correct answer:', oddNum)
   console.log('correct code?', compare)
})

router.post('/api/challenge6', (req, res) => {
   const input = req.body.code
   const primeCheck = code.primeCheck()
   let result = vm.runInNewContext(input)
   let compare = result === primeCheck
   console.log('user code:', result)
   console.log('correct answer:', primeCheck)
   console.log('correct code?', compare)
})

router.post('/api/challenge7', (req, res) => {
   const input = req.body.code
   const bubblesort = code.bubblesort()
   let result = vm.runInNewContext(input)
   let compare = result === bubblesort
   console.log('user code:', result)
   console.log('correct answer:', bubblesort)
   console.log('correct code?', compare)
})

router.post('/api/challenge8', (req, res) => {
   const input = req.body.code
   const ArrayAdditionI = code.ArrayAdditionI()
   let result = vm.runInNewContext(input)
   let compare = result === ArrayAdditionI
   console.log('user code:', result)
   console.log('correct answer:', ArrayAdditionI)
   console.log('correct code?', compare)
})

router.post('/api/challenge9', (req, res) => {
   const input = req.body.code
   const simple_clock_angle = code.simple_clock_angle()
   let result = vm.runInNewContext(input)
   let compare = result === simple_clock_angle
   console.log('user code:', result)
   console.log('correct answer:', simple_clock_angle)
   console.log('correct code?', compare)
})

router.post('/api/challenge10', (req, res) => {
   const input = req.body.code
   const lucky_sevens = code.lucky_sevens()
   let result = vm.runInNewContext(input)
   let compare = result === lucky_sevens
   console.log('user code:', result)
   console.log('correct answer:', lucky_sevens)
   console.log('correct code?', compare)
})

module.exports = router