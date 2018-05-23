require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
const appointmentRoutes = require("./routes/appointments");
const newsRoutes = require("./routes/newsItems");
const recipeRoutes = require("./routes/recipes");
const db = require("./models");
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/newsItems", newsRoutes);
app.use("/api/recipes", recipeRoutes);

app.get("/api/appointments", async function(req, res, next) {
  try {
  	let appointments = await db.Appointment.find()
  	  .sort({ createdAt: 1 })
  	return res.status(200).json(appointments);
  } catch(err) {
  	return next(err);
  }
});

app.get("/api/appointmentsDesc", async function(req, res, next) {
  try {
  	let appointments = await db.Appointment.find()
      .sort({ createdAt: -1 })
    return res.status(200).json(appointments);
  } catch(err) {
  	return next(err);
  }
});

app.get("/api/appointmentsAsc", async function(req, res, next) {
  try {
  	let appointments = await db.Appontment.find()
  	  .sort({ createdAt: 1 })
  	return res.status(200).json(appointments);
  } catch(err) {
  	return next(err);
  }
});

app.get("/api/newsItems", async function(req, res, next) {
  try {
  	let news = await db.NewsItem.find()
  	  .sort({ created: -1})
  	  return res.status(200).json(news)
  } catch(err) {
  	return next(err);
  }
});

app.get("/api/newsItemsAsc", async function(req, res, next) {
  try {
  	let news = await db.NewsItem.find()
  	  .sort({ created : 1 })
  	return res.status(200).json(news);
  } catch(err) {
  	return next(err);
  }
});

app.get("/api/recipes", async function(req, res, next) {
  try {
  	let recipes = await db.Recipe.find()
  	  .sort({ createdAt: -1 })
  	return res.status(200).json(recipes)
  } catch(err) {
  	return next(err);
  }
});

app.get("/api/recipesAsc", async function(req, res, next) {
  try {
  	let recipes = await db.Recipe.find()
  	  .sort({ createdAt: 1 })
  	return res.status(200).json(recipes);
  } catch(err) {
  	return next(err);
  }
});

app.get("/api/recipesTitles", async function(req, res, next) {
  try {
  	let recipes = await db.Recipe.find()
  	  .sort({ title: -1 })
  	return res.status(200).json(recipes)
  } catch(err) {
  	return next(err);
  }
});

app.get("/api/recipesTitlesAsc", async function(req, res, next) {
  try {
  	let recipes = await db.Recipe.find()
  	  .sort({ title: 1 })
  	return res.status(200).json(recipes);
  } catch(err) {
  	return next(err);
  }
});

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});