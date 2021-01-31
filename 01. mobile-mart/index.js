const http = require('http');
const fs = require('fs');
const replaceTemplate = require('./utils/replaceTemplate')

const dataString = fs.readFileSync('data.json', 'utf-8');
const data = JSON.parse(dataString);
const overView = fs.readFileSync('templates/overview_template.html', 'utf-8');
const cardTemplate = fs.readFileSync('templates/card_template.html', 'utf-8');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if(pathName === '/overview' || pathName === '/'){
    res.writeHead(200, {
      'Content-type': 'text/html',
    })
    const cards = data.map(mobile => replaceTemplate(cardTemplate, mobile))
    const outPut = overView.replace(/%product-cards%/g, cards.join(''))
    res.end(outPut)
  }else if(pathName === '/mobile'){
    res.end('Hello from laptop page!');
  } else if(pathName === '/api'){
    res.writeHead(200, {
      'Content-type': 'application/json',
    })
    res.end(dataString);
  }else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'This is a test'
    })
    res.end('<h1 style="text-align: center;">Page not found!</h1>')
  }
});

server.listen(1300, '127.0.0.1', () => {
  console.log(`Server listening on port 1300`);
})