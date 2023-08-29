const superhero=require('./ModuleCache')

console.log(superhero.getName())
superhero.setName("superman")

// In JS when you load a module it is cached for subsequent loading

// So this will not load the module again, it will pick and give you the original reference
const superhero2=require('./ModuleCache')
console.log(superhero2.getName())
// will return superman as it is cached