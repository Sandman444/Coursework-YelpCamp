var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest",
		image: "https://www.telegraph.co.uk/content/dam/Travel/2018/July/Scotland-campingGettyImages-526564828.jpg?imwidth=450",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non purus sollicitudin, fermentum felis vel, viverra arcu. Integer accumsan, nisl consectetur eleifend pulvinar, mauris justo pulvinar enim, vel aliquet ligula dui sed erat. Mauris malesuada tincidunt odio in egestas. Nulla egestas imperdiet mauris, et lobortis tellus aliquet non. Etiam a volutpat eros. Etiam vehicula urna vel nulla mollis semper. Mauris maximus, massa varius mollis malesuada, elit felis fermentum felis, a condimentum nulla ex et metus. Nulla semper, velit id semper tempus, augue orci maximus ante, quis molestie lorem tortor ut nunc. In auctor, risus eu vulputate tristique, nulla massa gravida turpis, quis tristique justo justo vel diam. Quisque vitae massa ut ante ornare eleifend."
	},
	{
		name: "Desert Mesa",
		image: "https://i.etsystatic.com/6405715/r/il/b7b2dc/633261969/il_570xN.633261969_kf3s.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non purus sollicitudin, fermentum felis vel, viverra arcu. Integer accumsan, nisl consectetur eleifend pulvinar, mauris justo pulvinar enim, vel aliquet ligula dui sed erat. Mauris malesuada tincidunt odio in egestas. Nulla egestas imperdiet mauris, et lobortis tellus aliquet non. Etiam a volutpat eros. Etiam vehicula urna vel nulla mollis semper. Mauris maximus, massa varius mollis malesuada, elit felis fermentum felis, a condimentum nulla ex et metus. Nulla semper, velit id semper tempus, augue orci maximus ante, quis molestie lorem tortor ut nunc. In auctor, risus eu vulputate tristique, nulla massa gravida turpis, quis tristique justo justo vel diam. Quisque vitae massa ut ante ornare eleifend."
	},
	{
		name: "Canyon Floor",
		image: "http://4.bp.blogspot.com/_Tky9MHaBv64/S_VxvE6IvnI/AAAAAAAACnc/JLkUliAotIM/s320/100519-194804-736049.jpg",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non purus sollicitudin, fermentum felis vel, viverra arcu. Integer accumsan, nisl consectetur eleifend pulvinar, mauris justo pulvinar enim, vel aliquet ligula dui sed erat. Mauris malesuada tincidunt odio in egestas. Nulla egestas imperdiet mauris, et lobortis tellus aliquet non. Etiam a volutpat eros. Etiam vehicula urna vel nulla mollis semper. Mauris maximus, massa varius mollis malesuada, elit felis fermentum felis, a condimentum nulla ex et metus. Nulla semper, velit id semper tempus, augue orci maximus ante, quis molestie lorem tortor ut nunc. In auctor, risus eu vulputate tristique, nulla massa gravida turpis, quis tristique justo justo vel diam. Quisque vitae massa ut ante ornare eleifend."
	}
]

function seedDB(){
	//remove all Campgrounds
	try{
		Campground.deleteMany({}, function(err){
			console.log("removed campgrounds!");
			
			//add a few campgrounds
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if(err){
						console.log(err);
					}
					else{
						console.log("added a campground");
						
						//add comments for each added campground
						Comment.create(
						{
							text: "This place is great, but I wish there was internet",
							author: "Homer"
						}, function(err, comment){
							if(err){
								console.log(err);
							}
							else{
								console.log("add a comment");
								
								campground.comments.push(comment);
								campground.save();
							}
						});
					}
				})
			});
		});
	}
	catch(err){
		console.log(err);
	}
}

module.exports = seedDB;