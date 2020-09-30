let router = require('express').Router();

router.get('/', function(req, res) {
  res.json({
    status: '200',
    message: 'Working!'
  });
});

// Import quotes controller
let quoteController = require('./quoteController');
// Contact routes
router.get('/quotes', quoteController.index);
router.post('/quotes', quoteController.new);

router.get('/seed/quotes', quoteController.getAllQuotes);

router.get('/seed/quotes/:id', quoteController.getSingleQuote)

router.get('/quotes/by/:category', quoteController.getByCategory);

router.get('/quotes/:quote_id', quoteController.view);
router.patch('/quotes/:quote_id', quoteController.update);
router.put('/quotes/:quote_id', quoteController.update);
router.delete('/quotes/:quote_id', quoteController.delete);

module.exports = router;
