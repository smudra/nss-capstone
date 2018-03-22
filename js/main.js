"use strict";

// Requires
let $ = require('jquery'),
    marvelKey = require('./marvel-key'),
    apiRequest = require('./api-request'),
    build = require('./buildFBObj'),
    db = require('./db-interaction'),
    fbConfig = require('./fb-config'),
    user = require('./user'),
    marvelCharacters = require('./marvel-characters');