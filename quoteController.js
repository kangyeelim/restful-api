Quote = require('./quoteModel');
// Handle index actions
exports.index = function (req, res) {
    Quote.get(function (err, quotes) {
        if (err) {
            res.send(err);
        }
        res.json({
            status: "success",
            message: "Quote retrieved successfully",
            data: quotes
        });
    });
};
// Handle create quote actions
exports.new = function (req, res) {
    var quote = new Quote();
    quote.message = req.body.message ? req.body.message : contact.message;
    quote.category = req.body.category ? req.body.category : contact.category;
    quote.save(function (err) {
        if (err) {
          res.send(err);
        }

        res.json({
            message: 'New quote created!',
            data: quote
        });
    });
};
// Handle view quote info
exports.view = function (req, res) {
    Quote.findById(req.params.quote_id, function (err, quote) {
        if (err) {
          res.send(err);
        }
        res.json({
            message: 'Quote details loading..',
            data: quote
        });
    });
};
// Handle update quote info
exports.update = function (req, res) {
  Quote.findById(req.params.quote_id, function (err, quote) {
        if (err) {
          res.send(err);
        }

        quote.message = req.body.message ? req.body.message : quote.message;
        quote.category = req.body.category;
        // save the quote and check for errors
        quote.save(function (err) {
            if (err) {
              res.json(err);
            }

            res.json({
                message: 'Contact Info updated',
                data: quote
            });
        });
    });
};
// Handle delete quote
exports.delete = function (req, res) {
    Quote.remove({
        _id: req.params.quote_id
    }, function (err, quote) {
        if (err) {
          res.send(err);
        }
        res.json({
            status: "success",
            message: 'Quote deleted'
        });
    });
};
