var express = require('express');
var router = express.Router();

var blogs = [
	{"id":11124,"title":"Chawmahalla Palace - The Nizami Sanctuary","url":"http://blog.ruddbuddy.com/?p=1739","imageUrl":"https://d26edclys0tq0o.cloudfront.net/BlogPostImages/1509440163997.jpg","priority":2,"content":"Built over 200 years ago, the magnificent Chowmahalla Palace is renowned for its opulence and elegance. A synthesis of many architectural styles and influences, the Palace has been scrupulously restored."},
	{"id":11127,"title":"An all inlcusive guide to Hampi city travel","url":"http://blog.ruddbuddy.com/?p=1776","imageUrl":"https://d26edclys0tq0o.cloudfront.net/BlogPostImages/1509442588206.jpg","priority":1,"content":"Among the wondrous cities in the history of India, Hampi has held one of the greatest seats of power. Though in ruins now, it was once the Imperial capital of the 14th Century Vijayanagara Empire, a significant location in the Ramayana, and home to the much revered Hanuman."},
	{"id":11128,"title":"An all inclusive guide to Goa Night life","url":"http://blog.ruddbuddy.com/?p=1905","imageUrl":"https://d26edclys0tq0o.cloudfront.net/BlogPostImages/1509442700695.jpg","priority":3,"content":"Since the Hippie trail was laid down in the 60s, Goa has not only had a multitude of travellers tasting its vibe, but returning back for second helpings as well. Some have even returned for good. The unparalleled psy-trance and techno music of the Goa nightlife, the eclectic food, and liquid courage sprawled across the nightclubs will give you an exuberant palette of things to do in Goa."},
	{"id":11129,"title":"5 Reasons why you need to explore Kochi on a bicycle","url":"http://blog.ruddbuddy.com/?cat=64","imageUrl":"https://d26edclys0tq0o.cloudfront.net/BlogPostImages/1509442766483.jpg","priority":4,"content":"With a vibrant history, a cocktailed culture, mouthwatering food, and an artsy style, Fort Kochi has made a name for itself among the many gems of south India. Finding the ideal way to explore it can be a hassle. Exploring on foot can be exhausting and time consuming while the auto drivers charge exorbitant prices. But like every destination, Fort Kochi has its own pace that is closely entwined with its vibe."}
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(blogs);
});
router.post('/getBlog', function(req, res, next) {
	console.log(req.body.blogId);
	var blog = {};
	for (var i = blogs.length - 1; i >= 0; i--) {
		if(blogs[i].id == parseInt(req.body.blogId)){
			blogs[i].body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
			blog = blogs[i]
		}
	}
	res.json(blog);
});
module.exports = router;
