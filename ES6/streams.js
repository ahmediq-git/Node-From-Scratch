const fs = require('node:fs')

// by default it is 64kb,we change to 2 charactacters
const readableStream = fs.createReadStream("./streams.txt", {encoding: 'utf-8', highWaterMark:2});

const writeableStream = fs.createWriteStream("./streams2.txt");

readableStream.on("data", (chunk)=>{
    console.log(chunk);
    writeableStream.write(chunk);
})

// it will write for all chunk


readableStream.pipe(writeableStream)