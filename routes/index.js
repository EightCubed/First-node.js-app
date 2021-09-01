var express = require('express');
var router = express.Router();

/* GET home page. */
let index= require('../controllers/index_funcn');

router.get('/',index.index_funcn);

console.log('Listening on Port 3000');

module.exports = router;
