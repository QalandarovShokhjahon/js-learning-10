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


