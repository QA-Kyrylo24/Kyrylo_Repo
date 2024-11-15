const http = require('http');
const fs = require('fs');
const url = require('url');



const server = http.createServer((request, response) => {
    const parsedUrl = url.parse(request.url, true); 
    const pathname = parsedUrl.pathname; 
    const query = parsedUrl.query; 

    if (pathname === '/file') {
        if (query.name) {
            const fileName = query.name;

            fs.readFile(fileName, 'utf8', (err, data) => {
                if (err) {
                    response.writeHead(404, { 'Content-Type': 'text/plain' });
                    response.end('File not found!');
                } else {
                    response.writeHead(200, { 'Content-Type': 'text/plain' });
                    response.end(data);
                }
            });
        } else {
            response.writeHead(400, { 'Content-Type': 'text/plain' });
            response.end('Missing file name in query!');
        }
    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Invalid route!');
    }
}).listen(5000);

console.log('Server is running at http://127.0.0.1:5000/');