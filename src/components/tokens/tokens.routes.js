const { Router } = require('express');

const router = Router();

const tokenController = require('./tokens.controller');

router.post('/', tokenController.token);

module.exports = router;
