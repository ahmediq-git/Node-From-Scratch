const EventEmitter = require('node:events')

const emitter = new EventEmitter()

// it will listen to the command 'order-pizza' and execute
// the callback function
emitter.on('order-pizza',(size, topping)=>{
    console.log(`pizza ordered with size ${size} and topping ${topping}`)
})

emitter.on('order-pizza', (size, topping)=>{
    if (topping==='mushroom'){
        console.log('why')
    }
})

// The first is what to listen to and the next args will automattically be mapped inside
// the listener's callback function
emitter.emit('order-pizza', 'large', 'mushroom')