




//Exercise 2 Using destructuring assignment syntax and the spread operator, write a function will capitalize theUsing destructuring assignment syntax and the spread operator, write a function will capitalize the
//first letter of a string.//
function capitalize([first, ...rest]) {
  return first.toUpperCase() + rest.join('');
}

console.log(capitalize('foobar')); 
console.log(capitalize('nodeJs'));



  //exercise 1Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literalsand for..of//
  const greeter = (myArray, counter) => {
    const greetText = "Hello";
    for (const item of myArray) {
      console.log(`${greetText} ${item}`);
    }
  };
  
  greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);
  

  //3Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case the first character of each Color in the following array..//

 
  const colors = ['red', 'green', 'blue'];

  const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  
  const capitalizedColors = colors.map(color => capitalizeFirstLetter(color));
  
  console.log(capitalizedColors);
  //4 Using array.proto.filter create a function that will filter out all the values of the array that are lessthan twenty.//
  const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(value => value <20);

console.log(filterLessThan20);

//5 Using array.proto.reduce create calculate the sum and product of a given//
const array = [1, 2, 3, 4];

const calculateSum = array.reduce((acc, value) => acc + value, 0);
const calculateProduct = array.reduce((acc, value) => acc * value, 1);

console.log(calculateSum);
console.log(calculateProduct);

//6 • Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derivesfrom Car Class. The parameters for the Car class is the model and year. The parameters for thesubclass is the model, year and balance.Use the super key word in the Sedan subclass to set the model and name in base Carconstructor.//
  
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }

  details() {
    return `Model: ${this.model}, Year: ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);
    this.balance = balance;
  }

  info() {
    return `${this.details()}, Balance: ${this.balance}`;
  }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
 
