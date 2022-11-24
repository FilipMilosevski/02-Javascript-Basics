let myName = 'Filip'; 
let myAge = 28; 
let canCode = true;
console.log ('Hello, my name is ' + myName +', I am ' + myAge + ' years old and i can code Javascript: ' + canCode);




let myName1 = 'Mosens';
let myAge1 = 35;
let canRun = true;
console.log ('Hi , my name is ' + myName1 + ' i\'m ' + myAge1 + 'years old and i can : '+ canRun);



let nr1 = 20;
let nr2 = 4;
let str1 ="HI";
let nr3 =3;
console.log(nr1-nr2);
console.log(nr1*nr2);
console.log(str1*nr1);
console.log(nr1+nr2+nr3);




let hours = 2;
let minutes = 30;
console.log(minutes + (135 % 60))
console.log(135-15)


let fn = "FILIP \nMILOSEVSKI \nFICO"; 
console.log (fn);



let st1 ="JavaScript is fun";
let st2 ="JavaScript is fun";
console.log ('These two strings are the same:',
 st1 === st2 );




let sym1 = Symbol  ("JavaScript is fun");
let sym2 = Symbol  ("JavaScript is fun");
console.log ('These two symbols are the same:',
 sym1 === sym2 );

 let nr11= 10;
 let nr22= "5";
 console.log (nr11+nr22);

let numb= 10;
numb= String (numb);
console.log(numb, typeof numb);


let numb1= "20";
numb1= Number (numb1);
console.log (numb1, typeof numb1);

let bool1= "any string will return true";
bool1= Boolean(bool1);
console.log (bool1, typeof bool1);


let nr111= 20;
let nr222= "20";
console.log (nr111 + Number (nr222));

let nullToNr= null;
nullToNr= Number (nullToNr);
console.log ("null", nullToNr, typeof nullToNr);

let strToNr ="";
strToNr=Number(strToNr);
console.log ("empty string", strToNr, typeof strToNr);


let nr12 = 2;
let nr13 = 10;
let result123 = nr12 ** nr13;
console.log (result123);


let nr01 = 10; 
let nr02 = 3;
let result01 = nr01 % nr02;
console.log (result01);


let nr03 = 8;
let nr04 = 2;
let result02 = nr03 % nr04;
console.log (result02);

let nr05 = 15;
let nr06 = 4;
let result03 = nr05 % nr06;
console.log (result03)



let mins1 = 135;
let mins2 = 60;
let resultmins = mins1 % mins2;
let hours2 = "2 hours and ";
console.log (hours2 + resultmins + ' minutes'); 


let nr1212= 5;
console.log (++nr1212)

let nr1313= 4;
console.log (--nr1313)


let xx= 5;
let yy= "5";
console.log (xx == yy);


let lang= "JAVASCRIPT";
let mess= `Lets learn  ${lang}`;
console.log (mess);
console.log ("mess", typeof mess)
console.log ("mess", typeof mess === typeof lang)