const express = require('express')
const router = express.Router()
const User = require('../db/models/user')
const Order = require('../db/models/orders')
const passport = require('../passport')

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log("Call /user for loged in user")
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
})

router.post(
	'/login',
	function (req, res, next) {
		// console.log(req.body)
		console.log('================')
		next()
	},
	passport.authenticate('local'),
	(req, res) => {
		console.log('POST to /login')
		const user = JSON.parse(JSON.stringify(req.user)) // hack
		const cleanUser = Object.assign({}, user)
		if (cleanUser.local) {
			console.log(`Deleting ${cleanUser.local.password}`)
			delete cleanUser.local.password
		}
		res.json({ user: cleanUser })
	}
)

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy()
		res.clearCookie('connect.sid')
		return res.json({ msg: 'logging you out' })
	} else {
		return res.json({ msg: 'no user to log out!' })
	}
})

router.post('/signup', (req, res) => {
	const { email, role, password } = req.body
	User.findOne({ 'local.email': email }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the email: ${email}`
			})
		}
		const newUser = new User({
			'local.email': email,
			'local.role': role,
			'local.password': password
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})

router.post("/neworder", function (req, res) {
	const newOrder = new Order({
		'customer': req.body.customer,
		'partnumber': req.body.partnumber,
		'orderquantity': req.body.orderquantity
	})
	newOrder.save((err, savedUser) => {
		if (err) return res.json(err)
		return res.json(savedUser)
	})
});

router.put("/process/:id", function (req, res) {
	console.log(req.params.id);
	Order.findByIdAndUpdate(req.params.id, req.body)
	.then(dbModel => res.json(dbModel))
	.catch(err => res.status(422).json(err));
});

router.get('/orders', (req, res) => {
	Order.find({ inprocess: false, finished: false })
		.then(function (dbOrders) {
			res.json(dbOrders);
		})
		.catch(function(err) {
			res.json(err);
		});
});

router.get('/ordersinprocess', (req, res) => {
	Order.find({ inprocess: true, finished: false })
		.then(function (dbOrders) {
			res.json(dbOrders);
		})
		.catch(function(err) {
			res.json(err);
		});
});

router.get('/ordersdone', (req, res) => {
	Order.find({ inprocess: true, finished: true })
		.then(function (dbOrders) {
			res.json(dbOrders);
		})
		.catch(function(err) {
			res.json(err);
		});
});

module.exports = router
