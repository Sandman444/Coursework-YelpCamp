var Campground = require("../models/campgrounds"),
	Comment    = require("../models/comment");
//all middleware goes here
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
	if(req.isAuthenticated()){
		return next();
	}
	req.flash("error", "Please Login First!");
	res.redirect("/login");
}

//is user logged in 
middlewareObj.checkCommentOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		Comment.findById(req.params.comment_id, function(err, foundComment){
			if(err){
				res.redirect("back");
			}
			else{
				//user own comment?
				if(foundComment.author.id.equals(req.user._id)){
					next();				
				}	
				else{
					res.redirect("back")
				}
			}
		});	
	}
	else{
		res.redirect("back");
	}
}

//is user logged in 
middlewareObj.checkCampgroundOwnership = function(req, res, next){
	if(req.isAuthenticated()){
		Campground.findById(req.params.id, function(err, foundCampground){
			if(err){
				res.redirect("back");
			}
			else{
				//user own campground?
				if(foundCampground.author.id.equals(req.user._id)){
					next();				
				}	
				else{
					res.redirect("back")
				}
			}
		});	
	}
	else{
		res.redirect("back");
	}
}

module.exports = middlewareObj;