// Namata print
// let one1 = document.querySelector(#demo2);
// let one2 = 1;
// let one3 = 4;

// while( one2 < 11){
//     one1.innerHTML += (one3 + "x" + 1 + "=" + one3*one2)
//     one2++
// }

// Result in console
let i = 1;
let number = 5;

while(i < 11){
    console.log(number + "x" + i + "=" + number*i);
    i++
}

// Result in web

let result = document.querySelector("#demo")
result.innerHTML = "Show result"