// /* اوامر الطباعة في جافا سكريبت */

// console.log("Hello, WORLD !");

// console.log("I'm Ghali");

// console.log("I'm 15 years old !");

// console.log(new Date());

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* let اوامر المتغيرات */

// /* explicitطريقة ال */

// let Username = "Ghali Alotaibi"

// /* implicitطريقة ال */

// let My_Age;

// My_Age = "15"

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* var اوامر المتغيرات */

// /* ملاحظة: يسمح الفار بتكرير اسم المتغير وهذا يعتبر شيء سيء */

// var username = "Ghali"

// var username = "Ghali"

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* const اوامر المتغيرات */

// /*Implicitملاحظة: لا يمكن استخدام طريقة ال*/

// const id = 18798734981976;

// console.log(id)

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* Data Types */

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* Primitive */

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* Boolean */

// let test1= false;

// console.log(test1);

// let test2= true;

// console.log(test2);

// /* لمعرفة نوقع الداتا */

// console.log(typeof test1);

// console.log(typeof test2);

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* Symbol type */

// /* ملاحظة: قيمتها فريدة */

// let test3=Symbol("test3");

// console.log(test3);
// console.log(typeof test3);

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* Null type */

// let test4=null;

// console.log(test4);
// console.log(typeof test4);

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* Undefined type */

// let test5=undefined;

// console.log(test5);
// console.log(typeof test5);

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* Number type */

// /* Integer */

// let x1=100;

// console.log(x1);
// console.log(typeof x1);

// /* Double */

// let x2=2.30;

// console.log(x2);
// console.log(typeof x2);

// /* bigint */

// let x3=1000000000000000000n;

// console.log(x3);
// console.log(typeof x3;

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* String type */

// /* ملاحظة: هو ما يكون داخل علامات التنصيص */

// let test6= "Ghali Alotaibi 'G'"

// console.log(test6);
// console.log(typeof test6);

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* interpolation */

// let country="France"
// let continent="Europe"

// console.log(`${country} is located in ${continent}`);

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* طرق استخدام السلسلة النصية */

// /* length */

// let str="Java Script"

// console.log(str.length);

// /* CharAt (index) */

// let str="Java Script"

// console.log(str.charAt(0));

// /* slice (index)*/

// let str="Java Script"

// console.log(str.slice(0));

// /* split (separator)*/

// let str="Java Script"

// console.log(str.split(" "));

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// // تحويل البيانات

// // Number to String

// const num= 42;
// const numToStr = String(num);

// console.log(`${typeof numToStr}:${num}`);

// // String to Number

// const str= "42";
// const StrToNum = Number(str);

// console.log(`${typeof StrToNum}:${str}`);

// // Boolean to String

// const Boo= true;
// const BooToStr = String(Boo);

// console.log(`${typeof BooToStr}:${Boo}`);

// // Boolean to Undefined

// const Boo= true;
// const BooToUn = undefined(Boo);

// console.log(`${typeof BooToUn}:${Boo}`);

// // Null to String

// const null1= null;
// const NullToStr = String(null1);

// console.log(`${typeof NullToStr}:${null1}`);

// // Bigint to String

// const Big= 1000000n;
// const BigToStr = String(Big);

// console.log(`${typeof BigToStr}:${Big}`);

// // String to number

// const str= "li";
// const StrToNum = Number(Big);

// console.log(`${typeof StrToNum}:${str}`);

// // String to number

// const str1= "text";
// const StrToNum1 = Number(Big);

// console.log(`${typeof StrToNum1}:${str1}`);

// // Bigint to Number

// const Big1= 10000n;
// const BigToNum = Number(Big1);

// console.log(`${typeof BigToNum}:${Big1}`);

// // Boolean to Number

// const Boo= false;
// const BooToNum = Number(Big1);

// console.log(`${typeof BooToNum}:${Boo}`);

// // Undefined to Number

// const Un= "U";
// const UnToNum = Number(Un);

// console.log(`${typeof UnToNum}:${Un}`);

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// // +

// console.log(22 + "1");

// // -

// console.log(22 - "1");

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* Non-Primitive */

// /*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// /* Object */

// let Object_1 = {
//     Name: "Ghali",
//     Age: 15,
//     Boo: true
// };

// // يمكنك حذف المفتاح الذي تريده ويجب عليك ان تضعها قبل اوامر الطباعة

// delete Object_1.Boo

// //اوامر طباعة المفاتيح 

// console.log(typeof Object_1);
// console.log(Object_1);
// console.log(Object_1.Name);
// console.log(Object_1.Age);
// console.log(Object_1.Boo);
