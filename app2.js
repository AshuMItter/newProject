
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


var arr = batch[3];
//var arr = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4] //-- invalid
//var arr = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];//
//var arr = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]; //-- invalid
//var arr = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]; //-- valid
var arrValWithIndex = []
var indx = 1

// converting individual array values into individual objects containing value and index because 
// indexOf is shoing dublicate value
// aarValWithIndex has valew of credit card number plus its index number.

for(let i =arr.length-1; i >= 0; i--)
{
    
    obj = {
        value:arr[i],
        index:indx
    }
    arrValWithIndex.push(obj);
    indx++;
    

}
//console.log(arrValWithIndex);
let fInalSum = [];

// looking for odd and even indexes ..
for(let i = 0 ; i <= arrValWithIndex.length-1; i++)
{
        //console.log(arrValWithIndex[i].index +' value is ' +arrValWithIndex[i].value);
        // checking if the value is at the correct index i.e.2 from right  
        // if index is completeley divisble by 2

        if(arrValWithIndex[i].index % 2 == 0)
        {
            //console.log(arrValWithIndex[i].index);
        
            // multiplying vale *2 at even index as per luhn algorithm
           let val= arrValWithIndex[i].value*2;
           
              // console.log(val);
           // checking if it is greater than 9 if so then we need to split 
           //the value and add it together   
           if(val > 9)
           {

               //converting val to string
               strVal = val.toString();

               //splitting string 
               valArr = strVal.split('');
               // summing up the spillted strings by converting them into integer
             let fval= valArr.reduce(function(acc,cval){
                      return parseInt(acc)+parseInt(cval);
              });
              //   console.log(fval);
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
                                 fInalSum.push(arrValWithIndex[i].value); 
                           //      console.log(arrValWithIndex[i].value+ 'is at odd index');
        }
}

let totSum = fInalSum.reduce(function(acc,val){return acc+val})
  console.log(totSum);

  if(totSum % 10 == 0)
  {
      console.log('This credit card number is valid!');
  }
  else
  {
      console.log('This credit card number is invalid!');
  }
  //console.log(arr);
  //console.log(totSum);


