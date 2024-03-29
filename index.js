const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api <br> by adsoft');
});


app.get('/header', (req, res, next) => {
	res.sendfile("assets/header.json");
});

app.get('/workexperience', (req, res, next) => {
	res.sendfile("assets/work.json");
});

app.get('/skills', (req, res, next) => {
	res.sendfile("assets/skills.json");
});

app.get('/certificados', (req, res, next) => {
	res.sendfile("assets/certificados.json");
});

app.get('/education', (req, res, next) => {
	res.sendfile("assets/education.json");
});

app.get('/interest', (req, res, next) => {
	res.sendfile("assets/interest.json");
});

app.get('/hours', (req, res, next) => {
	res.sendfile("assets/1a_dev_hours.json");
});


app.get('/size', (req, res, next) => {
	res.sendfile("assets/1a_proxy_size.json");
});

app.get('/test1', (req, res, next) => {
	res.sendfile("assets/3a_test1.json");
});

app.get('/test2', (req, res, next) => {
	res.sendfile("assets/3a_test2.json");
});

app.get('/test3', (req, res, next) => {
	res.sendfile("assets/3a_test3.json");
});

app.get('/test4', (req, res, next) => {
	res.sendfile("assets/3a_test4.json");
});

app.listen(port, () =>
	console.log('listening on port ' + port
	));

