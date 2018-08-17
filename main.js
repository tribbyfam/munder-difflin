

// Tried to make price popup when you click on the picture, couldn't do it, keeps telling me displayPrice is not defined.
// let myImages = document.getElementsByClassName("flip")

// let prices = document.getElementsByClassName("price")
// for (let i=0; i<myImages.length; i++){
//     myImage.addEventListener("click", displayPrice)
//     function displayPrice(){
    
//         price.style.display="block"
//     }
    
// }

let tracker1 = 'image1';
function change1(){
    let image = document.getElementById('flip1');

    if(tracker1 == 'image1'){
        image.src="./images/off-folded-menue.jpeg"
        tracker1 = 'image2'
    } else {
        image.src="./images/off-roll-paper.jpeg"
        tracker1 = 'image1'
    } 
}

let timer = setInterval('change1()', 2000);

// let tracker2 = 'image1'
// function change2(){
//     let image = document.getElementById('flip2');

//     if(tracker2 == 'image1'){
//         image.src="images/off-sch-binder.jpeg"
//         tracker2 = 'image2'
//     } else {
//         image.src="./images/off-sch-notepads.jpg"
//         tracker2 = 'image1'
//     }

//     function change2(){
//         let image = document.getElementById('flip3');

//     if(tracker == 'image1'){
//         image.src="images/off-sch-binder.jpeg"
//         tracker = 'image2'
//     } else {
//         image.src="./images/off-sch-notepads.jpg"
//         tracker = 'image1'
//     }
// }











    // for (let i = 0; i < myImage.length; i++) {
    //     event.target.style.display = "block"
