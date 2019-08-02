'use strict';

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _passport = require('./passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoStore = require('connect-mongo')(_expressSession2.default);

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _expressSession2.default)({
	secret: process.env.APP_SECRET || 'this is the default passphrase',
	store: new MongoStore({ mongooseConnection: _db2.default }),
	resave: false,
	saveUninitialized: false
}));

// ===== Passport ====
app.use(_passport2.default.initialize());
app.use(_passport2.default.session());

var router = _express2.default.Router();

var staticFiles = _express2.default.static(_path2.default.join(__dirname, '../../client/build'));
// production
if (process.env.NODE_ENV === "production") {
	app.use(staticFiles);
}

// development
// app.use(staticFiles)

app.use(router);

// any routes not picked up by the server api will be handled by the react router
app.use('/*', staticFiles);

app.use('/auth', require('./routes/auth'));
app.use('/main', require('./routes/main'));

app.set('port', process.env.PORT || 3001);
app.listen(app.get('port'), function () {
	console.log('Listening on ' + app.get('port'));
});