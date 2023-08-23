let Addbutton = document.getElementById("Button_add")
let Deletebutton = document.getElementById("Button_delete")

Addbutton.addEventListener("click", function () {
   
    let myelement = document.getElementById("table")
    let myelementtr = document.createElement("tr")
    let myelementtd = document.createElement("td")
   
    let myelement_truefalse = document.createElement("td")
    let myelement_createdate = document.createElement("td")
    let myelement_editdate = document.createElement("td")
   
    let d = new Date().toLocaleDateString('ar-sa', { weekday:"long", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"});
    let de = new Date().toLocaleDateString('ar-sa', { weekday:"short", year:"numeric", month:"short", day:"numeric", hour:"numeric", minute:"numeric"});
    
    let updatebutton = document.createElement("button")
    updatebutton.textContent = "عدّل على المخرج";
   
    myelement.appendChild(myelementtr)
    myelementtr.appendChild(myelementtd)
    myelementtr.appendChild(myelement_truefalse)
    myelementtr.appendChild(myelement_createdate)
    myelementtr.appendChild(myelement_editdate)
    myelementtr.appendChild(updatebutton)
   
    let usertd = prompt("ادخل المهمة")
    myelementtd.textContent = usertd;
   
    let user_ask = confirm("هل انهيتها ؟")
   
    if (user_ask == true) {
        myelement_truefalse.textContent = "تمت"
    } 
    
    else {
        myelement_truefalse.textContent = "لم تتم"
    }
    
    myelement_createdate.textContent = d;
    Deletebutton.addEventListener("click", function () {
    
        myelementtr.removeChild(myelementtd)
       
        myelement.removeChild(myelementtr)
       
        myelement.removeChild(Deletebutton)
    
    })
    
    updatebutton.addEventListener("click", function () {
    
        let up = prompt("ادخل المهمة الجديدة")
    
        myelementtd.textContent = up;
    
        myelement_editdate.textContent = de;
    
    })
})