const mongoose = require("mongoose");

const newsItemSchema = new mongoose.Schema (
  {
  	title: { type: String, required: true },
  	content: { type: String, required: true },
  	created: { type: String, default: Date.now }
  }
);

const NewsItem = mongoose.model("NewsItem", newsItemSchema);

module.exports = NewsItem;