let router = require('express').Router();

router.get('/', function(req, res) {
  res.json({
    status: '200',
    message: 'Working!'
  });
});

// Import quotes controller
let quoteController = require('./quoteController');
let Quote = require('./quoteModel');

// Contact routes
router.get('/quotes', function (req, res) {
    Quote.get(function (err, quotes) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "success",
            message: "Quotes retrieved successfully",
            data: quotes
        });
    });
});

router.post('/quotes', quoteController.new);

router.get('/seed/quotes', quoteController.getAllQuotes);

router.get('/seed/quotes/:id', quoteController.getSingleQuote)

router.get('/quotes/by/:category', quoteController.getByCategory);

router.get('/quotes/:quote_id', quoteController.view);
router.patch('/quotes/:quote_id', quoteController.update);
router.put('/quotes/:quote_id', quoteController.update);
router.delete('/quotes/:quote_id', quoteController.delete);

module.exports = router;
