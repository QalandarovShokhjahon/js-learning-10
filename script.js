'use strict';

// Callback → bu boshqa funksiya ichida chaqiriladigan funksiya.

// setTimeout() → bu funksiyaga berilgan kodni belgilangan vaqt (millisekundlarda) o‘tgach faqat bir marta bajarish uchun ishlatiladi.

// setTimeout(() => {
//   console.log("TechWebby");
// }, 1000);

// Vazifa:
let firstlog = 'firstLog()';
let secondlog = 'secondLog()';

setTimeout((firstLog) => {
  console.log(firstLog);

}, 2000, firstlog);
console.log(secondlog);


// setInterval() → bu ma’lum vaqt oralig‘ida biror funksiyani takroriy bajaradigan funksiya.
// let count = 0;
// let interval = setInterval(() => {
//   count++;
//   console.log(`Hisoblagich: ${count}`);  
// }, 1000);

// clearInterval() → bu setInterval() funksiyasini to‘xtatish uchun ishlatiladigan funksiya.
let count = 0

let interval = setInterval(() => {
  count++
  console.log(`Hisoblagich: ${count}`)

  if (count === 5) {
    clearInterval(interval)
    console.log("Interval to‘xtatildi!")
  }
}, 1000)

