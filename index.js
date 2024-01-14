
// function inmormateUs(){
    
//     var array1 = getElementsByClassName('serviceSection')[0];

//     // const found = array1.find((element) => element > 10);
//     // alert("you clicked:"+array1)
//     while(array1 == array1[0]){
//         alert("you clicked:"+array1)
//     }
// }
function bigImg1(x) {
     // by using single css property
    document.getElementById('serviceImg1').style.cssText = "visibility: visible;";
    // by using multiple styles with cssText
    document.getElementById('serviceSection1').style.cssText = "border: none;  box-shadow: none; height: 240px;";
    // inmormateUs();
}
function normalImg1(x) {
    // by using single css property
    document.getElementById('serviceImg1').style.visibility = "hidden";
    // by using multiple styles with setAttribute()
    var section = document.getElementById('serviceSection1');
    section.setAttribute(
        "style",
        " border-radius: 20px; height: 200px; "
    );
}

function bigImg2(x) {
    document.getElementById('serviceImg2').style.visibility = "visible";
    document.getElementById('serviceSection2').style.cssText = "border: none;  box-shadow: none; height: 240px;";
}
function normalImg2(x) {
    document.getElementById('serviceImg2').style.visibility = "hidden";
    document.getElementById('serviceSection2').style.cssText = " border-radius: 20px; height: 200px;";
}

function bigImg3(x) {
    document.getElementById('serviceImg3').style.visibility = "visible";
    document.getElementById('serviceSection3').style.cssText = "border: none;  box-shadow: none; height: 240px;";
}
function normalImg3(x) {
    document.getElementById('serviceImg3').style.visibility = "hidden";
    document.getElementById('serviceSection3').style.cssText = " border-radius: 20px; height: 200px;";
}

function bigImg4(x) {
    document.getElementById('serviceImg4').style.visibility = "visible";
    document.getElementById('serviceSection4').style.cssText = "border: none;  box-shadow: none; height: 240px;";
}
function normalImg4(x) {
    document.getElementById('serviceImg4').style.visibility = "hidden";
    document.getElementById('serviceSection4').style.cssText = " border-radius: 20px; height: 200px;";
}

function bigImg5(x) {
    document.getElementById('serviceImg5').style.visibility = "visible";
    document.getElementById('serviceSection5').style.cssText = "border: none;  box-shadow: none; height: 240px;";
}
function normalImg5(x) {
    document.getElementById('serviceImg5').style.visibility = "hidden";
    document.getElementById('serviceSection5').style.cssText = " border-radius: 20px; height: 200px;";
}

function bigImg6(x) {
    document.getElementById('serviceImg6').style.visibility = "visible";
    document.getElementById('serviceSection6').style.cssText = "border: none;  box-shadow: none; height: 240px;";
}
function normalImg6(x) {
    document.getElementById('serviceImg6').style.visibility = "hidden";
    document.getElementById('serviceSection6').style.cssText = " height: 200px;";
}
 function remover1(x){
    document.getElementById('nav1').style.position = "initial";
 }
function remover2(x){
    document.getElementById('nav1').style.position = "sticky";
}
let slideIndex = 0;
currentSlide(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){//0, 
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let l = slides.length;
    let dots = document.getElementsByClassName("dots");
    let d = dots.length;
    // if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = l}
    for (i = 0; i < l; i++) {
        // console.log(style.length);
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > l) {slideIndex = 1} 
    for (i = 0; i < d; i++) {
        console.log(d);
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function numAdder() {
        clients();
        staff();
        projects();
}
function clients(){
    let number = parseInt(document.getElementById('num1').value);
    // alert(number);  
        // for (let index = 0; index < 52; index++) {
        //     number = number + 100;
        //     document.getElementById('num1').value= number;
        //     console.log(number);
        // }
        // while (number < 5200) {
        //     number ++;
        //     const obj = document.getElementById('num1');
        //     obj.value = number;
        //     console.log(number);
        // }
        setInterval(()=>{
            if (number < 5200) {
                number +=20;
                const obj = document.getElementById('num1');
                obj.value = number;
                console.log(number);
            }
        },.5)
}

function staff(){
    let number = parseInt(document.getElementById('num2').value);
    // alert(number);  
        // for (let index = 0; index < 52; index++) {
        //     number = number + 100;
        //     document.getElementById('num1').value= number;
        //     console.log(number);
        // }
        // while (number < 52) { 
        //     number = number + 1;
        //     const obj = document.getElementById('num2');
        //     obj.value = number;
        //     console.log(number);
        // }
        setInterval(()=>{
            if (number < 52) { 
                number = number + 1;
                const obj = document.getElementById('num2');
                obj.value = number;
                console.log(number);
            }
        },40)
}
function projects(){
    let number = parseInt(document.getElementById('num3').value);
    // alert(number);  
        // for (let index = 0; index < 52; index++) {
        //     number = number + 100;
        //     document.getElementById('num1').value= number;
        //     console.log(number);
        // }
        // while (number < 3811) {
        //     document.getElementById("num3").value = number += 1;
        // }
        setInterval(()=>{
            if (number < 3811) {
                document.getElementById("num3").value = number += 20;
            }
        },.5)
}


// setTimeout(numAdder, 5000);
// function numRemover() {
//     let number = parseInt(document.getElementById('num1').value);
//     // alert(number);
//     // for (let index = 52; index >= number; index++) {
//     //     number = number - 100;
//     //     document.getElementById('num1').value= number;
//     //     console.log(number);
//     // }
//     setInterval(() => {
//         while (number > 0) {
//             number = number - 1;
//             document.getElementById('num1').value= number;
//             console.log(number);
//         }  
//     }, 5000);
// }
