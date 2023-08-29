const EventEmitter = require('node:events');

class Pizza extends EventEmitter{
    constructor(props) {
      super();
      this.orderNumber = 0
    }

    order(size, topping){
        this.orderNumber +=1;
        this.emit('order', size, topping)
    }

    displayOrderNumber(){
        console.log(`this order number is ${this.orderNumber}`)
    }
}

module.exports= Pizza