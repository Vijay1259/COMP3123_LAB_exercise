const http = require('http');
const basicAuth = require('basic-auth');
const employeeModule = require('./Employee'); // Ensure this path matches your file name

console.log("Lab 03 - NodeJs");


const port = process.env.PORT || 8082;


const AUTH_USER = 'user';
const AUTH_PASS = 'password';

const server = http.createServer((req, res) => {
    
    const credentials = basicAuth(req);
    if (!credentials || credentials.name !== AUTH_USER || credentials.pass !== AUTH_PASS) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="example"');
        res.end('Access denied');
        return;
    }

    if (req.method !== 'GET') {
        res.statusCode = 405;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
        return;
    }

    switch (req.url) {
        case '/':
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Welcome to Lab Exercise 03</h1>');
            break;
        
        case '/employee':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(employeeModule.getAllEmployees()));
            break;
        
        case '/employee/names':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(employeeModule.getEmployeeNames()));
            break;
        
        case '/employee/totalsalary':
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(employeeModule.getTotalSalary()));
            break;
        
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
            break;
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
