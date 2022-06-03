
const createWoodBlock = () => {
    const object = {      //return obj with 4 properties
        type: 'wood block',
        length: 10,
        material: 'pine',
        purpose: 'flute'
    }
return object    
}


const createBeautifulCarving = (woodObject) => {
    const string = `The ${woodObject.length}-inch, ${woodObject.material} ${woodObject.type} was carved into a wooden ${woodObject.purpose}`
    // Return a string representation of the object
return string
}

// The function returns a value, so that value is stored in a variable
const woodBlock = createWoodBlock()

// The function returns a value, so that value is stored in a variable
const carvingString = createBeautifulCarving(woodBlock)  // <-- Missing an argument. Fix it. Fixed!

console.log(carvingString) //works! returns string "The 10-inch, pine woodblock was carved into a wooden flute"

