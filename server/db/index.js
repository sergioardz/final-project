const mongoose = require('mongoose')
const keys = require(".././config/keys")

mongoose.connect(keys.mongoUrl, { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database`
	)
})

module.exports = db
