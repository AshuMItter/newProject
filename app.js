let abc = {}

let menu = {
    _courses : {
     _appetizers: [], 
     _mains: [],
     _desserts: [],
     
 get appetizers() {
  return this._appetizers;
     },
 get mains(){
  return this._mains;
     },
 get desserts() {
  return this._desserts;
     },
 set appetizers(val) {
  this._appetizers = val;
   },
 set mains(val) {
  this._mains = val;
   },
 set desserts(val) {
  this._desserts = val;
   },    
    get courses() {
      return {
        appetizers: this._appetizers,
        mains: this._mains, 
        desserts: this._desserts,
      };
    }
    },
  addDishToCourse(courseName, dishName, dishPrice) {
   const dish = {
     name: dishName,
     price: dishPrice,
    };
    //console.log(courseName);
    //console.log(typeof this._courses[courseName]);
    //this.appetizers.push('punka');
    this._courses[courseName].push(dish);
  },
   getRandomDishFromCourse(courseName) {
    
    const dishes = this._courses[courseName];
    
    //console.log(courseName);
    //console.log(typeof this._courses['courseName']);

    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
   },

  generateRandomMeal: function() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your full course meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total cost of your meal is ${totalPrice}.`;
  }
 };
  
  menu.addDishToCourse('appetizers', 'wings', 7.00);
  menu.addDishToCourse('appetizers', 'salad', 8.00);
  menu.addDishToCourse('appetizers', 'tortilla chips and salsa', 9.00);

  menu.addDishToCourse('mains', 'chicken parmesian', 15.00);
  menu.addDishToCourse('mains', 'steakandrice', 20.00);
  menu.addDishToCourse('mains', 'meatloafandpotatoes', 18.00);

  menu.addDishToCourse('desserts', 'cheesecake', 7.00);
  menu.addDishToCourse('desserts', 'chocolatecakeandicecream', 10.00);
  menu.addDishToCourse('desserts', 'applepie', 8.00);


//console.log(menu.appetizers);
const meal = menu.generateRandomMeal();
//console.log(menu._courses['appetizers']);
console.log(meal);


//co  */

/*
let ob = {
    _courses :{  
   _ar: []
    },
   get arr()
   {
     return this._courses._ar;
   },
   set arr(val)
   {
     this._courses._ar = val;
   },
   

getRandomVal(val)
{
      console.log(typeof this.arr);
      this.arr.push({name:'abc'});

}   //  console.log(this.arr);

}
ob.getRandomVal('abc');
console.log(ob.arr);
//*/
