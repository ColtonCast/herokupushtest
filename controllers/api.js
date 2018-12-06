const express = require('express'),
	code = require('../code/code'),
	vm = require('vm'),
	{ User, Game, Answer } = require('../models/index')

const router = express.Router()

// Test code
router.post('/api/:gameId/challenge1', (req, res) => {
<<<<<<< HEAD
   const user_id = req.user.dataValues.id
   const input = req.body.code
   const addAnswer = code.addNumbers(2, 2)
   let result = vm.runInNewContext(input)
   let compare = result === addAnswer
   console.log('correct:', compare)
   console.log('reqeust:', res)
   // req.flash err if err eval machine
   if (compare) {
      Answer.create({
         score: 5,
         code: input,
         gameId: req.params.gameId
      })
   } else {
      Answer.create({
         score: null,
         code: input,
         gameId: req.params.gameId
      })
   }
   req.flash('success', 'Answer submitted')
   res.redirect('/challenge/' + gameId + '/challenge2')
=======
	// const user_id = req.user.dataValues.id
	const input = req.body.code
	const addAnswer = code.addNumbers(2, 2)
	let result = vm.runInNewContext(input)
	let compare = result === addAnswer
	console.log('correct:', compare)
	// console.log('reqeust:', res)
	if (compare) {
		Answer.create({
			score: 5,
			code: input,
			gameId: req.params.gameId
		})
			.then(update => {
				console.log('update', update.dataValues)
				Game.update({
					total_score: update.dataValues.score
				}, { where: { id: req.params.gameId }})
			})
	} else {
		Answer.create({
			score: 0,
			code: input,
			gameId: req.params.gameId
		})
	}
	req.flash('success', 'Answer submitted')
	res.redirect('/challenge/' + gameId + '/challenge2')
>>>>>>> f9566894a474db98b7e78c31f7ea95b2bd65034d
})

router.post('/api/:gameId/challenge2', (req, res) => {
	const input = req.body.code
	const fizzBuzz = code.fizzBuzz(50)
	let result = vm.runInNewContext(input)
	let compare = result === fizzBuzz
	if (compare) {
		Answer.create({
			score: 5,
			code: input,
			gameId: req.params.gameId
		})
			.then(update => {
				console.log('update', update.dataValues)
				Game.update({
					total_score: update.dataValues.score
				}, { where: { id: req.params.gameId }})
			})
	} else {
		Answer.create({
			score: 0,
			code: input,
			gameId: req.params.gameId
		})
	}
	req.flash('success', 'Answer submitted')
	res.redirect('/challenge/' + gameId + '/challenge3')
})

router.post('/api/:gameId/challenge3', (req, res) => {
	const input = req.body.code
	const reverse = code.reverse('NodeJS')
	let result = vm.runInNewContext(input)
	let compare = result === reverse
	if (compare) {
		Answer.create({
			score: 5,
			code: input,
			gameId: req.params.gameId
		})
			.then(update => {
				console.log('update', update.dataValues)
				Game.update({
					total_score: update.dataValues.score
				}, { where: { id: req.params.gameId }})
			})
	} else {
		Answer.create({
			score: 0,
			code: input,
			gameId: req.params.gameId
		})
	}
	req.flash('success', 'Answer submitted')
	res.redirect('/challenge/' + gameId + '/challenge4')
})

router.post('/api/:gameId/challenge4', (req, res) => {
	const input = req.body.code
	const missingNum = code.missingNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20])
	let result = vm.runInNewContext(input)
	let compare = result === missingNum
	if (compare) {
		Answer.create({
			score: 5,
			code: input,
			gameId: req.params.gameId
		})
			.then(update => {
				console.log('update', update.dataValues)
				Game.update({
					total_score: update.dataValues.score
				}, { where: { id: req.params.gameId }})
			})
	} else {
		Answer.create({
			score: 0,
			code: input,
			gameId: req.params.gameId
		})
	}
	req.flash('success', 'Answer submitted')
	res.redirect('/challenge/' + gameId + '/challenge5')
})

router.post('/api/:gameId/challenge5', (req, res) => {
	const input = req.body.code
	const oddNum = code.oddNum()
	let result = vm.runInNewContext(input)
	let compare = result === oddNum
	if (compare) {
		Answer.create({
			score: 5,
			code: input,
			gameId: req.params.gameId
		})
			.then(update => {
				console.log('update', update.dataValues)
				Game.update({
					total_score: update.dataValues.score
				}, { where: { id: req.params.gameId }})
			})
	} else {
		Answer.create({
			score: 0,
			code: input,
			gameId: req.params.gameId
		})
	}
	req.flash('success', 'Answer submitted')
	res.redirect('/challenge/' + gameId + '/challenge6')
})

router.post('/api/:gameId/challenge6', (req, res) => {
	const input = req.body.code
	const primeCheck = code.primeCheck()
	let result = vm.runInNewContext(input)
	let compare = result === primeCheck
	if (compare) {
		Answer.create({
			score: 5,
			code: input,
			gameId: req.params.gameId
		})
			.then(update => {
				console.log('update', update.dataValues)
				Game.update({
					total_score: update.dataValues.score
				}, { where: { id: req.params.gameId }})
			})
	} else {
		Answer.create({
			score: 0,
			code: input,
			gameId: req.params.gameId
		})
	}
	req.flash('success', 'Answer submitted')
	res.redirect('/challenge/' + gameId + '/challenge7')
})

router.post('/api/:gameId/challenge7', (req, res) => {
	const input = req.body.code
	const bubblesort = code.bubblesort([4,2,5,3])
	let result = vm.runInNewContext(input)
	let compare = result === bubblesort
	if (compare) {
		Answer.create({
			score: 5,
			code: input,
			gameId: req.params.gameId
		})
			.then(update => {
				console.log('update', update.dataValues)
				Game.update({
					total_score: update.dataValues.score
				}, { where: { id: req.params.gameId }})
			})
	} else {
		Answer.create({
			score: 0,
			code: input,
			gameId: req.params.gameId
		})
	}
	req.flash('success', 'Answer submitted')
	res.redirect('/challenge/' + gameId + '/challenge8')
})

router.post('/api/:gameId/challenge8', (req, res) => {
	const input = req.body.code
	const ArrayAdditionI = code.ArrayAdditionI([1,2,3])
	let result = vm.runInNewContext(input)
	let compare = result === ArrayAdditionI
	if (compare) {
		Answer.create({
			score: 5,
			code: input,
			gameId: req.params.gameId
		})
			.then(update => {
				console.log('update', update.dataValues)
				Game.update({
					total_score: update.dataValues.score
				}, { where: { id: req.params.gameId }})
			})
	} else {
		Answer.create({
			score: 0,
			code: input,
			gameId: req.params.gameId
		})
	}
	req.flash('success', 'Answer submitted')
	res.redirect('/challenge/' + gameId + '/challenge9')
})

router.post('/api/:gameId/challenge9', (req, res) => {
	const input = req.body.code
	const simple_clock_angle = code.simple_clock_angle(15)
	let result = vm.runInNewContext(input)
	let compare = result === simple_clock_angle
	if (compare) {
		Answer.create({
			score: 5,
			code: input,
			gameId: req.params.gameId
		})
			.then(update => {
				console.log('update', update.dataValues)
				Game.update({
					total_score: update.dataValues.score
				}, { where: { id: req.params.gameId }})
			})
	} else {
		Answer.create({
			score: 0,
			code: input,
			gameId: req.params.gameId
		})
	}
	req.flash('success', 'Answer submitted')
	res.redirect('/challenge/' + gameId + '/challenge10')
})

router.post('/api/:gameId/challenge10', (req, res) => {
	const input = req.body.code
	const lucky_sevens = code.lucky_sevens([2,1,5,1,0])
	let result = vm.runInNewContext(input)
	let compare = result === lucky_sevens
	if (compare) {
		Answer.create({
			score: 5,
			code: input,
			gameId: req.params.gameId
		})
		Answer.findAll({
			where: { gameId: gameId },
			include: [
				Game
			]
		})
			.then(result => {
				const game = result[0].dataValues.gameId
				const points = result.map(points => points.dataValues.score)
					.reduce((a, b) => a + b, 0)
				Game.update({
					total_score: points,
				}, { where: { id: game }})
				req.flash('success', 'Thank you for playing')
				return res.redirect('/')
			})
	} else {
		Answer.create({
			score: 0,
			code: input,
			gameId: req.params.gameId
		})
		Answer.findAll({
			where: { gameId: gameId },
			include: [
				Game
			]
		})
			.then(result => {
				const game = result[0].dataValues.gameId
				const points = result.map(points => points.dataValues.score)
					.reduce((a, b) => a + b, 0)
				Game.update({
					total_score: points,
				}, { where: { id: game }})
				req.flash('success', 'Code challenge completed!')
				return res.redirect('/')
			})
	}
})

router.post('/api/quit', (req, res, next) => {
	Answer.findAll({
		where: { gameId: gameId },
		include: [
			Game
		]
	})
		.then(result => {
			const game = result[0].dataValues.gameId
			const points = result.map(points => points.dataValues.score)
				.reduce((a, b) => a + b, 0)
			Game.update({
				total_score: points,
			}, { where: { id: game }})
			req.flash('success', 'Thank you for playing')
			return res.redirect('/')
		})
		.catch(err => {
			req.flash('error', 'No data to pass')
			return res.redirect('/')
		})
})

module.exports = router