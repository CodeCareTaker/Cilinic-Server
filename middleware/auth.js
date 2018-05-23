require("dotenv").load();
var jwt = require("jsonwebtoken");

exports.loginRequired = function(req, res, next) {
  try {
  	const token = req.handlers.authorization.split(" ")[1];
  	jwt.verify(token, process.snv.SECRET_KEY, function(err, decoded) {
  	  if(decoded) {
  	  	next();
  	  } else {
  	  	return next({ status: 401, message: "You need to login to access this page" });
  	  }
  	});
  } catch(e) {
  	return next({ status: 401, message: "You need to login to access this page" });
  }
}

exports.ensureCorrectUser = function(req, res, next) {
  try {
  	const token = req.headers.authorization.split(" ")[1];
  	jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
  	  if (decoded && decoded.id === req.params.id) {
  	  	next();
  	  } else {
  	  	return next({ status: 401, message: "Unauthorized" });
  	  }
  	})
  	return next();
  } catch(e) {
  	return next({ status: 401, message: "Unauthorized"});
  }
}
