var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt-nodejs');

/* GET home page. */
router.get('/', function(req, res, next) {

	var password = "teste10";
	var wrondPassword = "teste20";
	
	/* bcrypt-nodejs 
	 * Encontrei essa biblioteca primeirao, mas a bcrypt parece ser mais utilizada  
	 */

	
	var hash = bcrypt.hashSync("teste10");

	console.log("Password = ", password);
	console.log("Hash = ", hash);
	console.log("Compare  = ", bcrypt.compareSync("teste10", hash));
	console.log("Compare veggies = ", bcrypt.compareSync("veggies", hash));

	
	bcrypt.genSalt(10, function(error, salt) {
		bcrypt.hash(password, salt, null, function(error, hash) {
			console.log("genSalt Hash = " + hash);		
		});
	});

	/* bcrypt */



	console.log("Index");
	res.render('index', { title: 'bcrypt' , hash: 'hash' });
});

module.exports = router;
