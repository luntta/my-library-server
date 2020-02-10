const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    id: Number,
    title: String,
    author: String,
    categories: Array,
    isbn: String,
    pdf: String,
    epub: String,
    mobi: String,
    thumbnail: String
  },
  { timestamps: true }
);

module.exports = mongoose.model('Data', DataSchema);