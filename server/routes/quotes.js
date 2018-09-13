const router = require('express').Router();
const Quote = require('../controllers/quotes');

router.post('/', Quote.posting);
router.get('/', Quote.display);

module.exports = router;