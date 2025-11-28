# 🧠 JavaScript Day 10 — Callbacks & Timer Functions

Bu darsda men JavaScript’da Callbacks va Timer funksiyalari bilan ishlashni o‘rgandim. 
Asinxron jarayonlarni boshqarish, kodni vaqt bo‘yicha tartiblash va intervalni to‘xtatish bo‘yicha amaliy bilimlarga ega bo‘ldim.

---

## 📚 O‘rganganlarim / What I learned

**Callback Functions**

- Bir funksiyani boshqa funksiyaga argument sifatida berish.
- Kodni tartib bilan bajarilishini ta’minlaydi.

**setTimeout()**
- Kodni belgilangan vaqtdan keyin bir marta bajaradi.

**setInterval()**
- Kodni ma’lum vaqt oralig‘ida takrorlab bajaradi.

**clearInterval()**
- setInterval() bilan ishlayotgan jarayonni to‘xtatadi.

---

## 💻 Kod namunasi / Example code

// Callback funksiyasi
```function greet(name, callback) {
  console.log("Salom, " + name);
  callback();
}

greet("Shokhjahon", () => {
  console.log("Callback ishladi!");
});

// setTimeout
setTimeout(() => {
  console.log("3 sekunddan keyin ishladi");
}, 3000);

// setInterval + clearInterval
let count = 0;
const timer = setInterval(() => {
  console.log("Interval ishlayapti");
  count++;
  if (count === 3) clearInterval(timer);
}, 1000);
```


---

## 🧩 Qisqacha nazariya / Short Theory

JavaScript’da asinxron jarayonlar callback funksiyalar va timer funksiyalari orqali boshqariladi:

setTimeout() — kechikish bilan bir martalik bajarilish

setInterval() — takroriy bajarilish

clearInterval() — intervalni to‘xtatish

Bu funksiyalar animatsiyalar, taymerlar, API chaqiriqlarini kutish va fon jarayonlarini boshqarishda keng qo‘llanadi.

---

## 🎯 Maqsad / Goal

Ushbu darsning maqsadi:

- Callbacks yordamida kod tartibini boshqarish
- Vaqt funksiyalari (setTimeout, setInterval) bilan ishlash
- Interval jarayonini to‘xtatishni o‘rganish
- Asinxron jarayonlarning qanday ishlashini tushunish


---

## 💬 Muallif / Author

✍️ Shokhjahon Qalandarov  
📅 Dars: 10-kun — Callbacks & Timer Functions
