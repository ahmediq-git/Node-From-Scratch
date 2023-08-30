### Why Module.Exports > Exports

Exports is a reference and if it changes, it can lead to undefined behavior

```js

// In node, you can import either by doing
require('./file')

// Or you can use ES modules
import add from "./file"

//  however with ES modules exports you do 
export default add;

// We can also directly export like in react
export const add = (a,b)=>{return a+b}
export const sub = (a,b)=>{return a-b}


// destructuring is also now allowed in ES6
import math from './file'
const {add, subtract}=math

// we can also import and do destructuring
import {add, subtract} from './file'
```

### Importing JSON data
We can directly import JSON data

Say we have the json file:

```json
{
    "name":"Ahmed"
}
```

We can import it as follows
```js
    const data=require('./data')
    console.log(data)
```

And this will display the JSON file to you

    ${
    "name":"Ahmed"
    }

### Watch mode: Check out `Watch.js`

In Watch mode we can see the realtime changes in the file showing output, 

simply run 

    node --watch watch.js

It shows the output in the terminal right away

checkout [ES6/watch.js](ES6/watch.js) file for an example.

### Built-in Modules

checkout [ES6/path.js](ES6/path.js) file for an example.

```js

const path = node('node:path')
```

you simply use the : symbol

### Callback patterns

Pasisng the function inside another function. The passed function is the callback function and the external function is the **high order function**.

```js
function greet(name){
    console.log(`Hello ${name}`)
}

function greetPerson(greetfn){
    const name = 'name'
    greetfn(name)
}

greetPerson(greet)


```

### Events Module

check [ES6/events.js](ES6/events.js)


### Extending Events Module

check [ES6/extended_events.js](ES6/extended_events.js)

Do note many classes like fs and http use extends on the EventEmitter class to add events functionality.


### Streams and Buffers

check [ES6/buffers.js](ES6/buffers.js) to see how streams and buffers work.

### Synchronous vs Async Javascript

Javascript is syncronous, stuff run one after the other

We use async/await, promises to make code look synchronous but it is still asynchronous under the hood.

The differences between asynchronous and synchronous include: Async is multi-thread, which means operations or programs can run in parallel. Sync is single-thread, so only one operation or program will run at a time. Async is non-blocking, which means it will send multiple requests to a server.

![Image](ES6/sync_async.png)


### Synchronous and Asynchronous File Reading

check out [ES6/syncfiles.js](ES6/syncfiles.js)

### Sync vs Async File Writing

checkout [ES6/filewrite.js](ES6/filewrite.js) to see how synchronous and asynchronous file writing works.

** Do note the non promise version of file reading and writing is much faster**
** but promise syntax is easier **

### File Reading and Writing With Promises

check out [ES6/promisefiles.js](ES6/promisefiles.js) to see how to read and write files using promises.


### Streams and Pipes

check out [ES6/streams.js](ES6/streams.js)
They are based on moving data in chunks from one place to another. 

```js
const fs = require('node:fs')

// by default it is 64kb,we change to 2 charactacters
const readableStream = fs.createReadStream("./streams.txt", {encoding: 'utf-8', highWaterMark:2});

const writeableStream = fs.createWriteStream("./streams2.txt");

readableStream.on("data", (chunk)=>{
    console.log(chunk);
    writeableStream.write(chunk);
})
// it will write for all chunks

```

Pipes are also used to move data from one place to another and can be used in place of `readableStream.on`


```js
const fs = require('node:fs')

// by default it is 64kb,we change to 2 charactacters
const readableStream = fs.createReadStream("./streams.txt", {encoding: 'utf-8', highWaterMark:2});

const writeableStream = fs.createWriteStream("./streams2.txt");

readableStream.pipe(writeableStream)

// it will write for all chunks




```

Pipes can even be chained such that output will be supplied to the next pipe

```js
someobject.pipe('...').pipe('...').pipe('...')....
```


