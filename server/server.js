import bodyParser from 'body-parser'
import express from 'express'
import path from 'path'
import morgan from "morgan"
import session from "express-session"
const MongoStore = require('connect-mongo')(session)
import dbConnection from "./db"
import passport from "./passport"
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session())

const router = express.Router()

const staticFiles = express.static(path.join(__dirname, '../../client/build'))
// production
if (process.env.NODE_ENV === "production") { 
	app.use(staticFiles) }

// development
// app.use(staticFiles)

app.use(router)

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles)


app.use('/auth', require('./routes/auth'))
app.use('/main', require('./routes/main'))


app.set('port', (process.env.PORT || 3001))
app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
