




///////////potenciranje so "" vo string

// let f = "FILIP "
// let m = "MILOSEVSKI"
// let a = 28;
// console.log(`HI. MY NAME IS ${f+m} AND I'M ${a} YEARS OLD.`);
// console.log("HI. MY NAME IS " + f + m + " AND I'M " + a +" YEARS OLD.");
// console.log(`HI. MY NAME IS \"${f}\" ${m} AND I'M ${a} YEARS OLD.`);
// let f1 = '"FILIP" '
// let m1 = ' "MILOSEVSKI"'
// console.log("HI. MY NAME IS " + f1 + m1 + " AND I'M " + a +" YEARS OLD.");

// let f = 'MOETO SKRATENO IME E \'FIL\' I SITE ME ZNAAT TAKA'
// let t = true;
// console.log(f);
// let f1 = "FIL"
// console.log('MOETO SKRATENO IME E '+ f1+ 'I SITE ME ZNAAT IT\'S IT\'S TAKA: '+t);


/////////////////pisuvanje vo nova linija
// let nl = "FILIP\nMILOSEVSKI"
// console.log(nl);



/////////////////////boolean 
// let a =5;
// let b =2;
// console.log(a>b);
// let f = "Javascript is fun"
// let m = "Javascript is fun"
// console.log(f==m);
// let a = 5;
// let b = "5"
// console.log(a==b);   ////////so 2== ke dade true dodeka so 3=== ke dade false 


///////////////////////mnozenje na string so number moze, dodeka sobiranje ne moze
// let a = 5;
// let b = "5";
// console.log(a*b);
// console.log(a+b);
// console.log(a+ Number(b)); //////////vaka se sobira string so number


///////////////////////strtonum numtostr booltostr
// let a = "20"
// console.log(a, typeof a);
// a = Number(a)
// console.log(a, typeof a);
// console.log(a = Number(a) , typeof a);

// let b = 40;
// console.log(b, typeof b);
// b = String(b)
// console.log(b, typeof b);
// console.log(b = String(b), typeof b);

// let c = true;
// console.log(c ,typeof c);
// c = String(c)
// console.log(c, typeof c);
// console.log(c = String(c), typeof c);



////////////na kvadrat / na kubik  ;     3x3 ; 3x3x3 ; 2x2x2
// let f = 3;
// console.log(f*f);
// console.log(f**f);
// let a =2;
// let b =3;
// console.log(a**b);



////////////////modulus kolku ostatok ima posle delenje
// let a =10;
// let b =3;
// console.log(a%b);
// let a1 =8;
// let b1 =2;
// console.log(a1%b1);
// let a2 =15;
// let b2 =4;
// console.log(a2%b2);

// let min = 155;
// let mins = 60;
// let res = min%mins;
// let hours = "2 hours and "
// console.log(hours + res+ " minutes");

///////////////////////////inkrementacija   a++ ili vo log ++a
// let a = 5;
// console.log(a);
// a++;
// console.log(a);
// let a1 = 5;
// console.log(++a1);
// let b = 5;
// console.log(b);
// b--;
// console.log(b);
// let b1 = 5;
// console.log(--b1);

// let a = "5"                            ///// moze i so string
// a++
// console.log(a);

// let f = 4;
// let m = 5;
// let a = 2;
// console.log(f++);
// console.log(++m);
// console.log(a++);
// console.log(f++ + ++m * a++);


/////////////////////equal or not
// let x = 5;
// let y = "5";
// console.log(x == y); ////////so 2== ke dade true dodeka so 3=== ke dade false
// let x1 = 5;
// let y1 = "5";
// console.log(!x1 == y1);

// let a = 5;
// let b ="5";
// console.log(a==b);
// let c = 5;
// let d = "5";
// console.log(!(c==d));


///////////////greles 
// let a = 5;
// let b = 3;
// console.log(a>b);


////////////////and or not
// let a = 5;
// let b = 3;
// let c = 8;
// console.log(a>b && c>b);
// console.log(a>b || c<b);
// console.log(!(a<b && c<b));



///////////////////////////multiplication and epxonentiation
// let f = 522;
// console.log(f);
// console.log(f = Math.sqrt(f));
// console.log(f*f);

// let m = 3;
// console.log(m**3);


/////////////////////////////////VEZBI

//////////////////1.60934 mph
// let mph=prompt("VNESI MILJI");
// let con = 1.60934;
// let km = mph*con
// console.log(`${mph} milji se ednakvi na ${km} kilometri `);

// let km1=prompt("VNESI KILOMETRI");
// let con1= 0.621371;
// let mph1 = km1*con1;
// console.log(`${km1} kilometri se ednakvi na ${mph1} milji`);


/////////////////2.54 cm
// let inc = prompt("VNESI INCI: ")
// let con = 2.54;
// let cm = inc*con;
// console.log(`${inc} inci se ednakvo na ${cm} santimetri`);

// let cm1= prompt("VNESI SANTIMETRI: ")
// let con1 =0.393701;
// let inc1= cm1*con1;
// console.log(`${cm1} santimetri se ednakvo na ${inc1} inci`);


////////////////////2.2046 ph
// let kg = prompt("VNESI KILOGRAMI: ")
// let con = 2.2046;
// let ph = kg*con;
// console.log(`${kg} kila se ednakvi na ${ph} paundi`);

// let ph1 = prompt("VNESI PAUNDI: ")
// let con1 = 0.453592;
// let kg1 = ph1*con1;
// console.log(`${ph1} paundi se ednakvi na ${kg1} kila`);


////////// ++ 
// let a = 5;
// let b = 70;
// let c = "5"
// b++;
// console.log(b);

// let a = 5;
// let b =10;
// a++;
// b--;
// console.log(a);
// console.log(b);
// let total = ++a +b;
// console.log(total);
// let total2 = 500+50 / 2 + --total;
// console.log(total2);


/////////////// or and not greles
// let a =5;
// let b =10;
// console.log(a>0 && b>0);
// console.log(a>7 || b>8);
// console.log(true || false);
// console.log(a==5 && b==10);
// console.log(a==4 || b==10);

////////////////////////pitagorova teorema
// let a =5;
// console.log(a + " a");
// let b =4;
// console.log(b +  " b");
// let a2 = a**2;
// console.log(a2 + " a2");
// let b2= b**2;
// console.log(b2);
// let c2 = a2 + b2;
// console.log(c2);
// let c = Math.sqrt(c2)
// console.log(c);


// let a = prompt("a= ")
// console.log("a= " +a);
// let b = prompt("b= ")
// console.log("b= " +b);
// let a2 = a**2;
// console.log("a2= " +a2); 
// let b2 = b**2;
// console.log("b2= " +b2); 
// let c2 = a2 + b2;
// console.log(c2);
// let c = Math.sqrt(c2)
// console.log(c);



// let a = prompt("a= ")
// console.log("a= " +a);
// let b = prompt('b= ')
// console.log("b= " +b);
// let a2 = a**2;
// console.log(a2);
// let b2 = b**2;
// console.log(b2);
// let c2 = a2+b2;
// console.log(c2);
// let c = Math.sqrt(c2)
// console.log(c);



///////////////////distances 



  // console.log (spacename, typeof spacename);
  // console.log (shutspeed, typeof shutspeed, "mph");
  // console.log (distamars, typeof distamars, "km");
  // console.log (distomoon, typeof distomoon, "km");
  // console.log (miltokil, typeof miltokil, "converter");


  // let mphmars = distamars * miltokil;
  // console.log (mphmars, "mph")

  // let hour = mphmars / shutspeed;
  // console.log (hour, "hours to mars");

  // let hours = 24;
  // let day = hour / hours;
  // console.log (day,"days to mars");

  // let mphmoon = distomoon * miltokil;
  // console.log (mphmoon, "mph");

  // let hour2 = mphmoon / shutspeed;
  // console.log (hour2, "hours to moon");

  // let day2 = hour2 / hours;
  // console.log (day2, "days to moon");

  // console.log (`${spacename} will take ${day} to Mars`);
  // console.log (spacename + " will take " + day2 +" to Moon");
