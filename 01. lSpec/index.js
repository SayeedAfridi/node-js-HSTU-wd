const fs = require('fs').promises

// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//   if(err){
//     console.log('Ooops! Something went wrong!')
//   }
//   fs.writeFile('./output.txt', `${data}\nfrom async read.`, 'utf-8', () => {
//     console.log('Output Created')
//   })
// })
//Async constawait

const readAndWriteFile = async () => {
  const content = await fs.readFile('./test.txt', 'utf-8')
  await fs.writeFile('./output2.txt', content, 'utf-8')
  console.log(content)
}


readAndWriteFile()