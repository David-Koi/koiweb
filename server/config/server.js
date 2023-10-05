const app = require('../app');
const http = require('http');

const port = 4000;
app.set('port', port);
const server = http.createServer(app);

server.listen(port, console.log('OK Server.js'));