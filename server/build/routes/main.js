'use strict';

var express = require('express');
var router = express.Router();
var User = require('../db/models/user');
var passport = require('../passport');

module.exports = router;