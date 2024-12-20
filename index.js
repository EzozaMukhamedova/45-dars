// masala2
// let str = "hello";
// console.log(str.toUpperCase());

// masala8
// let number = [2, 3, 4];
// number.unshift(1);
// console.log(number);

// masala10
// const mevalar = ["olma", "banan", "apelsin"];
// console.log(mevalar.join(", "));

// masala3
// let numbers = [1, 2, 3, 4, 5];
// let result = numbers.includes(5);
// console.log(result);

// masala1
// let talabalar = { Anvar: 18, Jamila: 20, Mirza: 19 };
// console.log("Talabalar soni: " + Object.keys(talabalar).length);

// masala2
// let mahsulotlar = { olma: 3000, nok: 4000, banan: 2000 };
// let natija = Object.values(mahsulotlar).reduce((a, b) => a + b, 0);
// console.log(natija);

// masala20
// const ballar = [90, 80, 70];
// Array.prototype.ortacha = function () {
//   const yegindi = ballar.reduce((acc, num) => acc + num, 0);
//   return yegindi / ballar.length;
// };
// const natija = ballar.ortacha();
// console.log(natija);

// Qiyin
// masala15
// let son = [1, 2, 3, 4];
// son.forEach(function (num) {
//   console.log(num + 2);
// });

// yoki ikkinchi yechim
// let son = [1, 2, 3, 4];
// let natija = son.map(function (num) {
//   return num + 2;
// });
// console.log(natija);

// masala8
// let bankHisob = {
//   balans: 500000,
// };

// Object.defineProperty(bankHisob, "PinCode", {
//   value: 4444,
//   writable: false,
// });
// bankHisob.balans += 55;
// bankHisob.PinCode = 2222;
// console.log(bankHisob);

// masala16
// function Odam(ism) {
//   this.ism = ism;
// }
// Odam.prototype.gapir = function () {
//   return this.ism + " to'xtamay gapir.";
// };
// const odam1 = new Odam("Ezoza");
// console.log(odam1.gapir());

// masala17
// let katalog = {
//   texnika: { kompyuter: 5000, printer: 3000 },
//   oziq_ovqat: { non: 1000, choy: 2000 },
// };
// let texnikaYeg = Object.values(katalog.texnika).reduce(
//   (acc, sum) => acc + sum,
//   0
// );
// let oziqYeg = Object.values(katalog.texnika).reduce((acc, sum) => acc + sum, 0);
// console.log("Texnika: " + texnikaYeg + ", " + "Oziq-ovqat:" + " " + oziqYeg);

// Yoki ikkinchi yechim

// let katalog = {
//   texnika: {
//     kompyuter: 5000,
//     printer: 3000,
//   },
//   oziq_ovqat: {
//     non: 1000,
//     choy: 2000,
//   },
// };
// console.log(katalog);
// let res = "";
// for (let key in katalog) {
//   const c = katalog[key];
//   const str = key.split("_").join("-");
//   const name = str.charAt(0).toUpperCase() + str.slice(1);
//   const summa = Object.values(c).reduce((acc, item) => acc + item);

//   res += name + ": " + summa + ", ";
// }
// console.log(res);
