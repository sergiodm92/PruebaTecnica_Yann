const { Router } = require('express');
const url = require('./url');


const router = Router();

router.use('/', url);


module.exports = router;
