

// Tried to make price popup when you click on the picture, couldn't do it, keeps telling me displayPrice is not defined.

let myImage = document.getElementsByTagName("flip")[0]
let price = document.getElementsByTagName("price")[0]

myImage.addEventListener("onclick", displayPrice)

function displayPrice(event){
    if (i = 0; i < myImage.length; i++;) {
        event.target.style.display = "block"
    }
}
