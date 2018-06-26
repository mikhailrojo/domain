"use strict";
const whois = require('../helper');

module.exports = async (req, res) => {
	const {domain} = req.query;
	const isValidUrl = isURL(domain);

	console.log(`Domain to search: ${domain}`);


	if (!domain || !isValidUrl) {
		return res.send({success: false, error: 'Домен не обнаружен'});
	}
	try {
		const result = await whois(domain);

		if(!result) {
			return res.send({success: true, result: 'Домен не был найден'})
		}

		res.send({success: true, result});
	} catch (e) {
		res.send({success: false, error: 'Домен не обнаружен'});
	}

};

function isURL(str) {
	const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
		'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return pattern.test(str);
}