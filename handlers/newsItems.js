const db = require("../models");

exports.createNewsItem = async function(req, res, next) {
  try {
  	let newsitem = await db.NewsItem.create({
  		title: req.body.title,
  		content: req.body.content
  	});
  	return res.status(200).json();
  } catch(err) {
  	return next(err);
  }
};

exports.getNewsItem = async function(req, res, next) {
  try {
  	let newsItem = await db.NewsItem.find(req.params.newsItem_id);
  	return res.status(200).json(newsItem);
  } catch(err) {
  	return next(err);
  }
};

exports.updateNewsItem = async function(req, res, next) {
  try {
  	let newsItem = await db.NewsItem.findByIdAndUpdate(req.params.newsItem_id);
  	return res.status(200).json(newsItem);
  } catch(err) {
  	return next(err);
  }
};

exports.deleteNewsItem = async function(req, res, next) {
  try {
  	let newsItem = await db.NewsItem.findByIdAndDelete(req.params.newsItem_id);
  	return res.status(200).json(newsItem);
  } catch(err) {}
};