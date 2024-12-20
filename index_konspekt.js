/////////////////////////////////////////////////////////////
// STRING //

// String - bu matn korinishidagi malumot. Har bir belgi index orqali aniqlanadi, 0 dan hisoblaydi. Ularni togridan togri o'zgartirib bolmaydi. Lekin yangi string yaratish mumkin.

// Yaratish usuli
// 3 xil usulda yosish mumkin
// 1) ikki tirnoq
// 2) yagona tirnoq
// 3) Template strings - backtick (``)

// Indekslari
// 0 dan boshlanadi. Har bir belgi indeksga ega. indeks orqali ularga kirish mumkin. [0]
// Mavjud bolmagan indeksni chiqarsa underfinf chiqadi

// Funksiya va metodlari
// Stiring methodlari
// lenght-string ichidagi belgilar sonini aniqlash uchun.
// toUppercase- hammasini katta harfga aylantirish uchun
// toLowerCase()- hammasini kichik harfga aylantirish
// indexOf() - stringdagi belgi va sozni birinchi indexini topish ("E")//1
// slice() - stringdan bazi qismini kesib olish uchun ((javasctipt) slice(4, 10) //script)
// substring - slice() ga oxshaydi, lekin salbiy indexlarni qabul qilmaydi.
// replace() - string ichidagi so'zni almashtiradi. birinchi ozgartirmoqchi bolgan sozni yozamiz, ikkinchida ozgartirmoqchi bolgan sozimizni
// includes() - string ichida biz kiritgan soz yoki belgi bor yoki yoqligini true, false orqali korsatadi.
// concat() -Ikki yoki undan ko‘p stringlarni birlashtiradi.
// replace() - Stringning bir qismini boshqa string bilan almashtiradi.
// split() - Stringni ma’lum belgi bo‘yicha massivga aylantiradi.
// substr(start, length)- Belgilangan joydan boshlab, ma’lum uzunlikdagi qismni qaytaradi.
// substring(start, end) -  Belgilangan boshlanish va tugash indekslari orasidagi stringni qaytaradi.
// trim() - Stringning boshidagi va oxiridagi bo‘shliqni olib tashlaydi.
// search() - Berilgan string qidiradi va topilgan joyning indeksini qaytaradi.
// repeat(count) - Stringni berilgan marta takrorlab qaytaradi.
// startsWith(substring) - String ma’lum substring bilan boshlanishini tekshiradi.
// endsWith(substring) - String ma’lum substring bilan tugashini tekshiradi.
// localeCompare() - Stringlarni alifbo tartibida solishtiradi.

////////////////////////////////////////////////////////////////////////////////////
// ARRAY //
// array - sonlar, stringlar, obektlar va boshqalarni oz ichiga oladi. koplab malumotlarni saqlash uchun moljallangan.
// Elon qilinishi
// [olma, anor, banan] qavslar orqali
// array constructor orqali - array(1,2,3,4);
// bosh massiv orqali - []

// array elementiga index orqali kirish mumkin. 0 dan boshlanadi.
// let colors = ["qizil", "yashil", "kok"];
// console.log(colors[0]);

// array methodlari
// length - array uzunligini olib beradi
// push() array oxiriga element qoshish uchun
// pop() massiv oxiridan element olib tasjlash uchun
// shift() massiv boshidan elementni olib tashlash uchun
// unshift() - massiv boshiga element qoshish
// splice() - massivdan elementlarni olib tashlash yoki qoshish uchun
// slice() massivdan bir qismini olish uchun
// forEach() - arrayning har bir elementini iteratsiya qiladi.
// map - maasivni har bir elementini ozgartirish va yangi massiv yaratish uchun
// filter - shartga mos kelishiga qarab filtrlash

// Array ichida array saqlanishi mumkin. nested arrays deyiladi.
// for ...of tsikli
// har bir qiymat ustida amal bajariladi
// for ..in tsikli
// obyektlar yoki massivlar keyslarini oqish uchun ishlatiladi. Asosan obyektlar uchun.
//  some() bu method array ichidagi bitta element shartga mos kelsa ham true qaytaradi, hech qaysisi mos kelmasa false
// every - bu method shartga hammasi mos kelsa true, bittasi mos kelmasa ham false boladi
// splice() - massivdan elementni qoshish ochirish yoki ozgartirish uchun ishlatilinadi
// slice() - arrayni bir qismini kesib olib, yangi array yaratadi. aslini ozgartirmaydi
// find() - array ichidagi birinchi mos keluvchi elementni qaytaradi, shartga mosi topilmasa underfind qaytaradi
// indexOf - method arraydagi birinchi mos keluvchi elementni indeksini qaytaradi, agalar mos element toptilmasa -1 qaytaradi
// concat() - ikki yoki undan kop arraylarni birlashtirib yangi array yaratadi
// findIndex() - bu method birinchi mos keluvchi indeksni qaytaradi. hech narsa topilmasa -1 ni qaytaradi
// includes() - berilgan qiymat mavjudligini tekshiradi(true, false)
//  sort() - bu tartiblash beradi. alifbo yoki sonli tartibda joylashtiradi. asl assivni o'zgartiradi. raqamlarni togri tartibda joylash uchun callback funksiya kerak boladi.

////////////////////////////////////////////////////////////////////////
// OBYEKT//

// Obyekt - murakkab malumotlarni saqlash va boshqarish uchun mojallangan. key va value dan iborat. obyekt orqali funksiyalar va malumotlarni saqlay olasiz.
// Elon qilish
// 1) Literal Sytax(name: 'Ezoza', age: 18)
// 2)Konstruktor orqali (new Object())
// 3)Funksiya orqali

// Obyekt elementlariga kirish
// 1) nuqta orqali (reson.name)
// 2) Kvadrat qavslar orqali (person[name])

// Obyektlar ichida saqlanadigan funksiya- method deyiladi.

//  obyektlarni qayta ishlash methodlari
//  Object.keys()- keyslar royxatini olish uchun,
//  Object.values() - valuelar royxatini olish uchun,
//  Object.entries() - keys va valueslarni juftlikda olish uchun

// nested object - bir obyekt ichida boshqa obyektlarni saqlash imkonini beradi. /(array ichida array)/

// this kalit sozi
// this - obyekt methodlari ichida obyektning xususiyatlariga murojat qilish uchun ishlatiladi.
// U doim ozini chaqirayorgan obyektni anaglatadi

// Konstruktor funksiyalar - obyeky yaratish uchun ishlatiladigan maxsus funksiya.
// Foydalanib bir xil xususiyatga ega bolgan obyektlarni yatarish mumkin. 
// Konstruktor bosh harf bilan boshlanadi. this dan foydalaniladi. 
// this obyektning xususiyatlarini belgilash uchun ishlatiladi. 

