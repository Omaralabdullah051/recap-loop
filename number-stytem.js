/////////////Number system//////////////////////
//Decimal|Base 10|0 1 2 3 4 5 6 7 8 9
//Binary |Base 2 |0 1 (0 is on and falsy value)&(1 is off and truthy value)
//Octal  |Base 8 |0 1 2 3 4 5 6 7
//Hexadecimal| Base 16| 0 1 2 3 4 5 6 7 8 9 A B C D E F
//Decimal to binary,octal,hexadecimal process is successive Division


//Decimal to Binary
//348 to binary
//348 / 2 = 174 | remainder = 0
//174 / 2 = 87 | remainder = 0
//87  / 2 = 43 | remainder = 1
//43  / 2 = 21 | remainder = 1
//21  / 2 = 10 | remainder = 1
//10 / 2 = 5 | remainder = 0
//5  / 2 = 1 | remainder = 1
//2  / 2 = 1 | remainder = 0
//1  /2 = 0 | remainder = 1(lower remainder to upper remainder)
//so, 348 to binary 101011100(base 2)


//Decimal to Octal
//348 to octal
//348 / 8 = 43.5 | remainder = 4
//43.5 /8 = 5.375| remainder = 3
//5 / 8 = 0.625 | remainder = 5(lower remainder to upper remainder)
//so 348 to octal 534(base 8)

//Decimal to Hexadecimal
//348 to hexadecimal
//348 / 16 = 21.75 | remainder = 12
//21.75/ 16 = 1.3125 | remainder = 5
//1 / 16 = 0 | remaider = 1(lower remainder to upper remainder)
//so, 348 to hexadecimal 15C(base 16)

//in js,numbers are decimal by defalut
// console.log((3).toString(2));decimal 3 to binary in js
// console.log((5).toString(2));decimal 5 to binary in js
//console.log((5).toString(8));decimal 5 to octal in js
//console.log((7).toString(16));decimal 7 to octal in js