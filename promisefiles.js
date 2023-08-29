const fs = require('fs/promises');

fs.readFile('./readfilepromise.txt', 'utf-8').then(data => console.log(data)).catch(err=>console.log(err));

fs.writeFile('./writefilepromise.txt', 'Hello World').then(console.log('file written successfully')).catch(err=>console.log('failed to write'))



