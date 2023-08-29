const buffer = new Buffer.from("hello")
console.log(buffer) //displays the buffer in hexadecimal
console.log(buffer.toJSON())
// displays the buffer in data array in decimal

console.log(buffer.toString()) 
// It will display the buffer in string format

buffer.write('no')

console.log(buffer.toString())
// buffers have limited memory so the first 2 in this case will be overwritten  by .write