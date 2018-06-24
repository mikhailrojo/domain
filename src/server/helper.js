'use strict';

const {exec: oldExec} = require('child_process');
const qs = require('querystring');
const {promisify} = require('util');

const exec = promisify(oldExec);

module.exports = async(site) => {
	try {
		const {stdout} = await exec(`whois ${site}`);
		return getOnlyValuableInfo(stdout, site);
	} catch (e) {
		console.log(e);
		return e;
	}
};

function getOnlyValuableInfo(stdout, site) {
	const stdoutArray = stdout.split('\n');
	const firstItem = stdoutArray.findIndex(line => line.includes(site.toUpperCase()));

	const resultingArr = stdoutArray.slice(firstItem);
	return resultingArr.slice(0, -2).join('\n');
}