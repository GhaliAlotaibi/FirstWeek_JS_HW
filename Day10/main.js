// واجب أستاذ علي

function isGreaterThan () {
    
    let num = 10;
    let user = Number(prompt("your number :"))
    
    if (user > num) {
        alert(user + num)
    } 
    
    else {
        alert("Error")
    }
}
isGreaterThan()

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// واجباات استاذة سماح

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// 1st Exercise

function javascript_Boot_camp(teach) {
    let teacher = prompt("Please choose Teacher (1) or (2) :")

    if (teacher == 1) {
        alert("This javaScript BootCamp with teacher1 OK?");
    }

    else if (teacher == 2) {
        alert("This javaScript BootCamp with teacher2 OK?")
    }

    else {
        alert("The value you entered is not valid.")
    }

}

javascript_Boot_camp()

/*<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// 2nd Exercise

function SMA(a, b) {
    const nums = a + b;
    alert(nums / 2)
}

// Integer

SMA(10, 10)

// Double

SMA(8.3, 6.8)