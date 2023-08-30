const PizzaShop = require('./extended_events')
const pizza = new PizzaShop()

pizza.on("order", (size, topping)=>{
    console.log(`The size of the pizza is ${size} and topping ${topping}`)
})

pizza.order('5', 'mushroom');
pizza.displayOrderNumber();