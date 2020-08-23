let router = require('express').Router();

router.get('/', function(req, res) {
  res.json({
    status: '200',
    message: 'Working!'
  });
});

// Import quotes controller
var quoteController = require('./quoteController');
// Contact routes
router.route('/quotes')
    .get(quoteController.index)
    .post(quoteController.new);

router.route('/seed/quotes')
  .get(quoteController.getAllQuotes);

router.route('/seed/quotes/:id')
  .get(quoteController.getSingleQuote);

router.route('/quotes/:quote_id')
    .get(quoteController.view)
    .patch(quoteController.update)
    .put(quoteController.update)
    .delete(quoteController.delete);

module.exports = router;
