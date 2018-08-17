

// Tried to make price popup when you click on the picture, couldn't do it, keeps telling me displayPrice is not defined.
// let myImages = document.getElementsByClassName("flip")

// let prices = document.getElementsByClassName("price")
// for (let i=0; i<myImages.length; i++){
//     myImage.addEventListener("click", displayPrice)
//     function displayPrice(){
    
//         price.style.display="block"
//     }
    
// }

// let large = new large[2];
// let office = new office[2];
// let colors = new colors[2];
// for ( i=0; i<large.length; i++){
//     large[i] = loadImage("large" + i + ".jpg")
// }

let tracker1 = 'image1';
function change1(){
    let image = document.getElementById('flip1');

    if(tracker1 == 'image1'){
        image.src="./images/large2.jpg"
        tracker1 = 'image2'
    } else {
        image.src="./images/large1.jpg"
        tracker1 = 'image1'
    } 
}
let timer = setInterval('change1()', 2000);


let tracker2 = 'image1'
function change2(){
    let image = document.getElementById('flip2');

    if(tracker2 == 'image1'){
        image.src="./images/office2.jpg"
        tracker2 = 'image2'
    } else {
        image.src="./images/office1.jpg"
        tracker2 = 'image1'
    }
}   
let timer2 = setInterval('change2()', 2100);


let tracker3 = 'image1'
function change3(){
    let image = document.getElementById('flip3');

    if(tracker3 == 'image1'){
        image.src="./images/color2.jpg"
        tracker3 = 'image2'
    } else {
        image.src="./images/color1.jpg"
        tracker3 = 'image1'
    }
}
let timer3 = setInterval('change3()', 2200);












    // for (let i = 0; i < myImage.length; i++) {
    //     event.target.style.display = "block"
