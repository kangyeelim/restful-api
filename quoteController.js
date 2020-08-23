let quotes = require('./dummy/quotes.js');

exports.getAllQuotes = function (req, res) {
  return res.status(200).json({
    quotes,
    message: "All quotes retrieved."
  })
}

exports.getSingleQuote = function (req, res) {
  const findQuote = quotes.find(quote => quote.id === parseInt(req.params.id));
  if (findQuote) {
    return res.status(200).json({
      student: findQuote,
      message: "A single quote returned",
    });
  }
  return res.status(404).json({
    message: "Quote not found",
  });
}

let Quote = require('./quoteModel');
// Handle index actions
exports.index = function (req, res) {
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
};
// Handle create quote actions
exports.new = function (req, res) {
    var quote = new Quote();
    quote.message = req.body.message ? req.body.message : quote.message;
    quote.category = req.body.category ? req.body.category : quote.category;
    quote.save(function (err) {
        if (err) {
          res.send(err);
        } else {
          res.json({
              message: 'New quote created!',
              data: quote
          });
        }
    });
};
// Handle view quote info
exports.view = function (req, res) {
    Quote.findById(req.params.quote_id, function (err, quote) {
        if (err) {
          res.send(err);
        } else {
          res.json({
              message: 'Quote details loading..',
              data: quote
          });
        }
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
            } else {
              res.json({
                  message: 'Contact Info updated',
                  data: quote
              });
            }
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
        } else {
          res.json({
              status: "success",
              message: 'Quote deleted'
          });
        }
    });
};

exports.getByCategory = function (req, res) {
  var query = {};
  query["category"] = req.params.category;
  console.log(req.params.category);
  Quote.find(query)
    .limit(200)
    .then(entries => res.json({
      status: "success",
      data: entries
    }))
    .catch(err => res.send(err));
}
