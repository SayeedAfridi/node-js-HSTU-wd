const http = require('http');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if(pathName === '/overview' || pathName === '/'){
    res.end('Hello from overview!');
  }else if(pathName === '/laptop'){
    res.end('Hello from laptop page!');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'This is a test'
    })
    res.end('<h1 style="text-align: center;">Page not found!</h1>')
  }
});

server.listen(1300, '127.0.0.1', () => {
  console.log(`Server listening on port 1300`)
})