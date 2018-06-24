const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handler = app.getRequestHandler();
const api = require('./src/server/ajax/api');

app.prepare().then(() => {
	"use strict";

	const server = express();

	server.get('/api', api);

	server.get('*', (req, res) => handler(req, res));
	const port = process.env.PORT || 3004;

	server.listen(port, err => {
		if(err) console.log(err);
		console.log(`> Ready on port ${port}`);
	})

});