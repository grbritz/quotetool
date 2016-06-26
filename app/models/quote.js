var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  mongoose_random = require('mongoose-random');

var QuoteSchema = new Schema({
  text: String,
  author: String
});

QuoteSchema.plugin(mongoose_random, {path: 'r'});

QuoteSchema.virtual('created_at')
  .get(function(){
    return this._id.getTimestamp();
  });

var Quote = mongoose.model('Quote', QuoteSchema);

Quote.syncRandom(function (err, result) {
  console.log(result.updated);
});

