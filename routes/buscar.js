const express   = require("express");
const router    = express.Router();
const engine    = require("../lib/engine");
const validator = require('validator');

router.use('/', function (req, res, next) {
	const {checkin, checkout} = req.body;

	if(!validator.isDate(checkin, "DD/MM/YYYY") || !validator.isDate(checkout, "DD/MM/YYYY"))
	  return res.status(422).send('Failed Validation');
	  
	next();
});

router.post("/", async (req, res) => {
	try {
		const {checkin, checkout} = prepareReqBody(req.body);
		const rooms = await engine(checkin, checkout);
		res.status(200).send(rooms);
	}
	catch(exc){
		res.status(500).send('Internal Server Error');
	}
});

function prepareReqBody(body){
	body.checkin  = body.checkin.replaceAll("/", "");
	body.checkout = body.checkout.replaceAll("/", "");

	return body;
}

module.exports = router;