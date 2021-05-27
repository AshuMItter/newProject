// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above 
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
// holds the object array //containing value of credit card and its index
var objArrWithValueIndex = [];
let fInalSum = [];// will hold final sum(for valid/invalid checking)

var indx = 1; // index that starts from 1 and denotes the value of the card.
// Add your functions below:
//****This has been coded as per the Code Academy Project-Credit Card Checker */
const validateCred = (cards) => { 
   let sum = 0;
   //console.log(cards);
   //**index has to be even and then we need select the vale at that index
   // generate an index for this which should run from right to left '<==='.
   for(let i =cards.length-1; i >= 0; i--)
   {    
    Objt = {
        value:cards[i],
        index:indx
    }        
    // put this object into an array;
    objArrWithValueIndex.push(Objt);   
    indx++;
    }
    for(let i = 0 ; i <= objArrWithValueIndex.length-1; i++)
   {
        //console.log(arrValWithIndex[i].index +' value is ' +arrValWithIndex[i].value);
        // checking if the value is at the correct index i.e.2 from right  
        // if index is completeley divisble by 2

        if(objArrWithValueIndex[i].index % 2 == 0)
        {
            //console.log(arrValWithIndex[i].index);
        
            // multiplying vale *2 at even index as per luhn algorithm
           let val= objArrWithValueIndex[i].value*2;
           
              // console.log(val);
           // checking if it is greater than 9 if so then we need to split 
           //the value and add it together   
           if(val > 9)
           {

               //converting val to string
              /* strVal = val.toString();

               //splitting string 
               valArr = strVal.split('');
               // summing up the spillted strings by converting them into integer
             let fval= valArr.reduce(function(acc,cval){
                      return parseInt(acc)+parseInt(cval);
              }); */
              //   console.log(fval);
            let  fval = val -9;
             fInalSum.push(fval);
            //console.log(fval+ 'is at even index and greater than nine');
           }
           else{
               fInalSum.push(val); 
                              //    console.log(arrValWithIndex[i].value+' is smaller than nine value');
                                //console.log(fval+ 'is at even index and smaller than nine');
           }
        }
        else
        {
                    fInalSum.push(objArrWithValueIndex[i].value); 
               //      console.log(arrValWithIndex[i].value+ 'is at odd index');
        }
}
let totSum = fInalSum.reduce(function(acc,val){return acc+val})
 // console.log(totSum);

  if(totSum % 10 == 0)
  {
      return true;//console.log('This credit card number is valid!');
  }
  else
  {
       return false;//console.log('This credit card number is invalid!');
  }

}

 /*for (let i = -1; i < cards.length; i--) {
   let curVal = (cards[i])%2;
   if (curVal > 9) {
   curVal -= 9;
  }
  sum += curVal;
  if (!sum%10 === 0) {
   return false;
  };
  }; 
 }; */
let invalidCardArr = [];
// it will receieva the batch array as parameter and 
// run a loop to get the nested array and run check if it is valid or invalid
 const findInvalidCards = (nestedArray) => {

for (i = 0; i < nestedArray.length; i++)
 {
   //console.log(nestedArray[i])
   // console.log(nestedArray.length);
 let res = validateCred(nestedArray[i]);
 
 if (!res) {
   invalidCardArr.push(nestedArray[i]);
 } 
 }
 return invalidCardArr;
 }; 

const idInvalidCardCompanies = (invalidCards) => {
 
 let invalidCardIssuers = [];
 // checking for the first value of the array inside the array.[0][0]
 if (invalidCards[0][0] === 3) {
  invalidCardIssuers.push('Amex');
  } else if (invalidCards[0][0] === 4 ) { 
  invalidCardIssuers.push('Visa');
  } else if (invalidCards[0][0] === 5) {
  invalidCardIssuers.push('Mastercard');
  } else if (invalidCards[0][0] === 6) {
  invalidCardIssuers.push('Discover'); 
  } 
  else {
    invalidCardIssuers.push('Company not found!');
  };
  // remove dublicate value
  let uniqueInvalidCardIssuers = invalidCardIssuers.filter((c, index) => {
    return invalidCardIssuers.indexOf(c) === index;
});
  return uniqueInvalidCardIssuers;
};  

 var arRes = findInvalidCards(batch);
 console.log(idInvalidCardCompanies(arRes)[0]);
 for(let a =0; i< 10; i++ )
 {
   cobsole.log("abc");
 }