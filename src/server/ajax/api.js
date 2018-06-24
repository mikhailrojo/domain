"use strict";
const whois = require('../helper');

module.exports = async (req, res) => {
	const {domain} = req.query;
	console.log(`Domain to search: ${domain}`);
	if (!domain) {
		return res.send({success: false, error: 'Домен не обнаружен'});
	}
	const result = await whois(domain);

	if(!result) {
		return res.send({success: true, result: 'Домен не был найден'})
	}

	res.send({success: true, result});
};
