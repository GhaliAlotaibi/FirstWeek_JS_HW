/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// الجمل الشرطية (if statements)

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

let number = 10;

if (number > 0) {
    console.log("yes");
}

else {
    console.log("no");
}

// .................................................................................................................................

// استحدام النصوص المركبة في الجمل الشرطية

let name = "Ghali";

let age = 15;

if (age == 15 && name == "Ghali") {
    console.log("Welocome back " +name+ " to Tuwaiq academy");
}

else if (age > 15 && name == "Ghali") {
    console.log("Please mr." +name+ " confirm your age");
}

else {
    console.log("Enterance denied");
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// استخدام البرومبت في الجمل الشرطية 

let S = prompt("Whats your score?")

if (S > 100){
    alert("Imposibble");
}

else if (S >= 95) {
    alert("A+");
}

else if (S >= 95) {
    alert("A-");
}

else if (S >= 90) {
    alert("A");
}

else if (S >= 85) {
    alert("B+");
}

else if (S >= 80) {
    alert("B-");
}

else if (S >= 75) {
    alert("B");
}

else if (S >= 75) {
    alert("D+");
}

else if (S >= 70) {
    alert("D-");
}

else if (S >= 65) {
    alert("D");
}

else {
    alert("F");
}

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

let speed = prompt("Enter your speed :");

let speedlimit = 60;

let message = speed > speedlimit ? "انت تقود بسرعة زائدة" : "انت تقود بأمان";

alert(message)

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// SWITCH

let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;

    case 2:
        a = 'two';
        break;

    case 3:
        a = 'three';
        break;

    default:
        a = 'not found';
        break;

}

console.log(`The value is ${a}`);

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// الجمل الشرطية المنطقية

// && = (و) يجب ان يتحقق من الشرطين ثم يسمح له بتنفيذ الامر

// || = يسمح اذا تحقق فقط من شرط واحد ويسمج له بتنفيذ الامر (أو)

// ! = (ليست) اذا تحقق من الشرط لا يسمح لك بتنفيذ الامر

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

