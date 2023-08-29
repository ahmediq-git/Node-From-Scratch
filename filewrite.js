const fs = require('node:fs');

fs.writeFileSync('./readfile.txt', 'Hi', (err) => {
    if (err) throw err;
    console.log('File written successfully');
})


// interesting condition when both run together asynchronously

fs.writeFile('./readfile.txt', 'hell', (err)=>{
    console.log(err)
})

fs.writeFile('./readfile.txt', 'appended', {flag:"a"}, (err)=>{
    if (err){
        console.log(err)
    } else {
        console.log('File written successfully');
    }

})


// fs.writeFile('filename', filecontent, (err)=>console.log(err))