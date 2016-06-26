var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  name: String,
  books: Array
});

AuthorSchema.virtual('created_at')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Author', AuthorSchema);

