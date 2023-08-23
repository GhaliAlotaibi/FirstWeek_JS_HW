let addButton = document.getElementById("addContentButton")

let savedImages = [];

window.addEventListener("load", function () {
    //
    savedImages = JSON.parse(localStorage.getItem("savedImages"))
    //
    for (let i = 0; i < savedImages.length; i++) {
        let imageSrc = savedImages[i];

        let targetElement = document.getElementById("myelement")

        let imageElement = document.createElement("img")
        let paragraph = document.createElement("p")
        let deleteButton = document.createElement("button")

        paragraph.innerText = "عنوان الصورة";
        paragraph.id = "photo";

        imageElement.src = imageSrc;
        imageElement.alt = "image";
        deleteButton.innerText = "delete";

        deleteButton.addEventListener("click", function () {
            // 
            savedImages.splice(savedImages, 1)
            localStorage.setItem("savedImages", JSON.stringify(savedImages))
            //
            targetElement.removeChild(paragraph)
            targetElement.removeChild(imageElement)
            targetElement.removeChild(deleteButton)
        });

        targetElement.appendChild(paragraph)
        targetElement.appendChild(imageElement)
        targetElement.appendChild(deleteButton)
    }
});

addButton.addEventListener("click", function () {
    let targetElement = document.getElementById("myelement")

    let imageElement = document.createElement("img")
    let paragraph = document.createElement("p")
    let deleteButton = document.createElement("button")

    paragraph.innerText = "عنوان الصورة";
    paragraph.id = "photo";

    imageElement.src = 
    "https://images.unsplash.com/photo-1692221409004-7907ad2705e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"

    imageElement.alt = "image";
    deleteButton.innerText = "delete";

    deleteButton.addEventListener("click", function () {
        targetElement.removeChild(paragraph)
        targetElement.removeChild(imageElement)
        targetElement.removeChild(deleteButton)
    });
    //
    targetElement.appendChild(paragraph)
    targetElement.appendChild(imageElement)
    targetElement.appendChild(deleteButton)
    //
    savedImages.push(imageElement.src)
    localStorage.setItem("savedImages", JSON.stringify(savedImages));
});
let username = localStorage.getItem("username")

if (username) {
    let welcomeMessage = document.getElementById("welcomeMessage")
    welcomeMessage.textContent = "مرحبا بك" + username + "!";
}

else {
    window.location.href = "index.html"
}