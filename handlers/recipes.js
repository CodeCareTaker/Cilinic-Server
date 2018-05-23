const db = require("../models");

exports.createRecipe = async function(req, res, next) {
  try {
  	let recipe = await db.Recipe.create({
  	  name: req.body.name,
  	  ingredients: req.body.ingredients,
  	  instructions: req.body.instructions
  	})
  	return res.status(200).json(recipe);
  } catch(err) {
  	return next(err);
  }
}

exports.getRecipe = async function(req, res, next) {
  try {
  	let recipe = await db.Recipe.find(req.body.recipe_id);
  	return res.status(200).json(recipe);
  } catch(err) {
  	return next(err);
  }
}

exports.updateRecipe = async function(req, res, next) {
  try {
  	let recipe = await db.Recipe.findByIdAndUpdate(req.body.recipe_id);
  	return res.status(200).json(recipe);
  } catch(err) {
  	return next(err);
  }
}

exports.deleteRecipe = async function(req, res, next) {
  try {
  	let recipe = await db.Recipe.findByIdAndDelete(req.body.recipe_id);
  	return res.status(200).json(recipe);
  } catch(err) {
  	return next(err);
  }
}