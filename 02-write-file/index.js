const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'text.txt');
const writableStream = fs.createWriteStream(filePath, 'utf-8');
const { stdin, stdout, exit } = require('process');
const readline = require('readline');

const rl = readline.createInterface({
  input: stdin,
  output: stdout
})

rl.write('Введите текст\n');
rl.on('line', line => line === 'exit' ? exit() : writableStream.write(line+'\n'));
process.on('exit', () => console.log('Конец)'))