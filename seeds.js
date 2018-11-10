var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require('./models/comment');

var data = [
        {
            name: "Cloud's Rest",
            image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_1280.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat ligula, fermentum quis dapibus et, sagittis id purus. Praesent iaculis neque a quam aliquam dapibus. Nulla placerat consequat est sit amet condimentum. Phasellus eget tempor ligula, ut rhoncus eros. Maecenas imperdiet lorem sit amet mauris placerat posuere. Donec a est tempus, molestie enim id, rhoncus elit. Vivamus viverra mauris id nisl vehicula, vitae eleifend dui vehicula."
        },
        {
            name: "Mountain View",
            image: "https://cdn.pixabay.com/photo/2018/05/16/15/49/camper-3406137_1280.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat ligula, fermentum quis dapibus et, sagittis id purus. Praesent iaculis neque a quam aliquam dapibus. Nulla placerat consequat est sit amet condimentum. Phasellus eget tempor ligula, ut rhoncus eros. Maecenas imperdiet lorem sit amet mauris placerat posuere. Donec a est tempus, molestie enim id, rhoncus elit. Vivamus viverra mauris id nisl vehicula, vitae eleifend dui vehicula."
        },
        {
            name: "Desert Canyon ",
            image: "https://cdn.pixabay.com/photo/2016/11/22/23/08/adventure-1851092_1280.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur erat ligula, fermentum quis dapibus et, sagittis id purus. Praesent iaculis neque a quam aliquam dapibus. Nulla placerat consequat est sit amet condimentum. Phasellus eget tempor ligula, ut rhoncus eros. Maecenas imperdiet lorem sit amet mauris placerat posuere. Donec a est tempus, molestie enim id, rhoncus elit. Vivamus viverra mauris id nisl vehicula, vitae eleifend dui vehicula."
        }
    ]

function seedDB(){
    Campground.remove({}, function(err){
       if(err){
           console.log(err);
       }else{
           console.log("removed campgrounds");
            // data.forEach(function(seed){
            //     Campground.create(seed, function(err, campground){
            //       if(err){
            //           console.log(err);
            //       } else {
            //           console.log("added a campground");
            //           Comment.create({
            //               text: "This place is great, except there is no Wifi.",
            //               author: "Bob"
            //           }, function(err, comment){
            //               if(err){
            //                   console.log(err);
            //               }else{
            //                   campground.comments.push(comment);
            //                   campground.save();
            //                   console.log("create new comment");
            //               }
            //           });
            //       }
            //     });
         
            // });           
       }
    });  
}

module.exports = seedDB;