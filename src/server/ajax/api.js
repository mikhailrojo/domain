"use strict";
const whois = require('../helper');
const url = require('url');

module.exports = async (req, res) => {
	const {domain} = req.query;
	const isValidUrl = isRuUrl(domain);

	console.log(`Domain to search: ${domain}`);

	if (!domain || !isValidUrl) {
		return res.send({success: false, error: 'Домен не обнаружен'});
	}
	try {
		const result = await whois(getPathName(domain));

		if(!result) {
			return res.send({success: true, result: 'Домен не был найден'})
		}

		res.send({success: true, result});
	} catch (e) {
		res.send({success: false, error: 'Домен не обнаружен'});
	}

};

function isRuUrl(str) {
	const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
		'(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+ru$'); // domain name and extension

	return pattern.test(str);
}

function getPathName(str) {
	return url.parse(str).pathname;
}