var mongoose = require('mongoose');
// Setup schema
var quoteSchema = mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Quote model
var Quote = module.exports = mongoose.model('quote', quoteSchema);

module.exports.get = function (callback, limit) {
    Quote.find(callback).limit(limit);
}
