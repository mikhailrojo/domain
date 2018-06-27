'use strict';

const net = require('net');

/**
 * Возвращает информацию по домену
 * @param site
 * @returns {Promise<string>}
 */
module.exports = (site) => {
	return new Promise((resolve, reject) => {
		net.createConnection(43, 'whois.tcinet.ru')
			.on('data', (response) => {
				const result = getOnlyValuableInfo(response.toString(), site);

				resolve(result)
			})
			.on('error', (error) => {
				console.log(error);
				reject('Домен не был найден')
			})
			.write(`${site} \r\n`);

	});
};

function getOnlyValuableInfo(stdout, site) {
	const stdoutArray = stdout.split('\n');
	const firstItem = stdoutArray.findIndex(line => line.includes(site.toUpperCase()));

	const resultingArr = stdoutArray.slice(firstItem);
	return resultingArr.slice(0, -2).join('\n');
}
