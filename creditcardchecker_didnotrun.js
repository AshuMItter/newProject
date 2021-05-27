/*
function AddNumbersBetweenThemselvesIfGreaterThanNine(val) // step two
{
if(val > 9)
           {

               //converting val to string
               strVal = val.toString();

               //splitting string 
               valArr = strVal.split('');
               // summing up the spillted strings by converting them into number
               let fval= valArr.reduce(function(acc,cval){
                      return parseInt(acc)+parseInt(cval);
              });
                // console.log(fval);
                SaveTheNumber(val);
                          //fInalSum.push(fval);
           }
           else{
               SaveTheNumber(val);
               //fInalSum.push(val);
           }
           
}

function CheckIfFinalSumIsCompletelyDivisbleByTen() //-- step three
{
let totSum = fInalSum.reduce(function (val1,val2){return val1+val2});

if (totSum % 10 == 0  ) {
  console.log('This credit card number is valid!');    
}
else
{
    console.log('This credit card number is invalid!');    
}
}
// implementing Luhn Algiorithm  

function ImplementLunhAlgorithm(){
// looking for odd and even indexes ..
for(let i = 0 ; i <= arrValWithIndex.length-1; i++)
{
    FindOutEverySecondNumberFromRight(arrValWithIndex[i].index);
        
        
}
//CheckIfFinalSumIsCompletelyDivisbleByTen();
}
ImplementLunhAlgorithm();


function CheckValidity(creditCardnumber){  
    GenerateObjectArray(creditCardnumber);
    ImplementLunhAlgorithm();
     

}
//const valid = //////-- global scope--////
//const arr = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]; //-- invalid
//const arr = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]; //-- valid

//let arrValWithIndex = []; // will be an object array to store index and value 


// splitting credit card array & saving its values and index in an object array
function GenerateObjectArray(cardNumber) //-- miscelenious step 
{
for(let i =cardNumber.length-1; i >= 0; i--)
{
    
    obj = {
        value:cardNumber[i],
        index:indx
    }
    arrValWithIndex.push(obj);
    indx++;
    
}
}
//array to the hold number for final sum.


//-- to save the number to final set
function SaveTheNumber(number)
{
 //   fInalSum.push(number);

}

function FindOutEverySecondNumberFromRight(index) //-step one
{
if(index % 2 == 0)
        {

                  
            // multiplying vale *2 at even index as per luhn algorithm
           let val= index.value*2;
           AddNumbersBetweenThemselvesIfGreaterThanNine(val);  

           // checking if it is greater than 9 if so then we need to split 
           //the value and add it together   
           
        }
        else
        {
            SaveTheNumber(index.value);
                //fInalSum.push(arrValWithIndex[i].value);
        }
}
function AddNumbersBetweenThemselvesIfGreaterThanNine(val) // step two
{
if(val > 9)
           {

               //converting val to string
               strVal = val.toString();

               //splitting string 
               valArr = strVal.split('');
               // summing up the spillted strings by converting them into number
               let fval= valArr.reduce(function(acc,cval){
                      return parseInt(acc)+parseInt(cval);
              });
                // console.log(fval);
                SaveTheNumber(val);
                          //fInalSum.push(fval);
           }
           else{
               SaveTheNumber(val);
               //fInalSum.push(val);
           }
           
}

function CheckIfFinalSumIsCompletelyDivisbleByTen() //-- step three
{
let totSum = fInalSum.reduce(function (val1,val2){return val1+val2});

if (totSum % 10 == 0  ) {
  console.log('This credit card number is valid!');    
}
else
{
    console.log('This credit card number is invalid!');    
}
}
// implementing Luhn Algiorithm
function ImplementLunhAlgorithm(){
// looking for odd and even indexes ..
for(let i = 0 ; i <= arrValWithIndex.length-1; i++)
{
    FindOutEverySecondNumberFromRight(arrValWithIndex[i].index);
        
        
}
CheckIfFinalSumIsCompletelyDivisbleByTen();
}


function CheckValidity(creditCardnumber){  
    GenerateObjectArray(creditCardnumber);
    ImplementLunhAlgorithm();
     

}
//const valid = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]; //-- valid
//const invalid = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]; //-- invalid

//CheckValidity(valid); //-- valid
//const invalid = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]; //-- invalid

//CheckValidity(valid); //-- valid

//var arrValWithIndex = [] // will be an object array to store index and value 
//var indx = 1 //-- index to get into the above array of objects

// splitting credit card array & saving its values and index in an object array
function GenerateObjectArray(cardNumber) //-- miscelenious step 
{
for(let i =cardNumber.length-1; i >= 0; i--)
{
    
    obj = {
        value:cardNumber[i],
        index:indx
    }
    arrValWithIndex.push(obj);
    indx++;
    
}
}
//array to the hold number for final sum.


//-- to save the number to final set
function SaveTheNumber(number)
{
    fInalSum.push(number);

}

function FindOutEverySecondNumberFromRight(index) //-step one
{
if(index % 2 == 0)
        {

                  
            // multiplying vale *2 at even index as per luhn algorithm
           let val= index.value*2;
           AddNumbersBetweenThemselvesIfGreaterThanNine(val);  

           // checking if it is greater than 9 if so then we need to split 
           //the value and add it together   
           
        }
        else
        {
            SaveTheNumber(index.value);
                //fInalSum.push(arrValWithIndex[i].value);
        }
}/*
function AddNumbersBetweenThemselvesIfGreaterThanNine(val) // step two
{
if(val > 9)
           {

               //converting val to string
               strVal = val.toString();

               //splitting string 
               valArr = strVal.split('');
               // summing up the spillted strings by converting them into number
               let fval= valArr.reduce(function(acc,cval){
                      return parseInt(acc)+parseInt(cval);
              });
                // console.log(fval);
                SaveTheNumber(val);
                          //fInalSum.push(fval);
           }
           else{
               SaveTheNumber(val);
               //fInalSum.push(val);
           }
           
}
/*
function CheckIfFinalSumIsCompletelyDivisbleByTen() //-- step three
{
let totSum = fInalSum.reduce(function (val1,val2){return val1+val2});

if (totSum % 10 == 0  ) {
  console.log('This credit card number is valid!');    
}
else
{
    console.log('This credit card number is invalid!');    
}
}
// implementing Luhn Algiorithm
function ImplementLunhAlgorithm(){
// looking for odd and even indexes ..
for(let i = 0 ; i <= arrValWithIndex.length-1; i++)
{
    FindOutEverySecondNumberFromRight(arrValWithIndex[i].index);
        
        
}
CheckIfFinalSumIsCompletelyDivisbleByTen();
}


function CheckValidity(creditCardnumber){  
    GenerateObjectArray(creditCardnumber);
    ImplementLunhAlgorithm();
     

}
//const valid = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]; //-- valid
//const invalid = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]; //-- invalid

//CheckValidity(invalid);
