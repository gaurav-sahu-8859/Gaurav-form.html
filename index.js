
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
    document.getElementById('serviceSection1').style.cssText = "border: none; height: 240px;";
    // inmormateUs();
}
function normalImg1(x) {
    // by using single css property
    document.getElementById('serviceImg1').style.visibility = "hidden";
    // by using multiple styles with setAttribute()
    var section = document.getElementById('serviceSection1');
    section.setAttribute(
        "style",
        "border: 5px solid #131921; height: 200px;"
    );
}

function bigImg2(x) {
    document.getElementById('serviceImg2').style.visibility = "visible";
    document.getElementById('serviceSection2').style.cssText = "border: none; height: 240px;";
}
function normalImg2(x) {
    document.getElementById('serviceImg2').style.visibility = "hidden";
    document.getElementById('serviceSection2').style.cssText = "border: 5px solid #131921; height: 200px;";
}

function bigImg3(x) {
    document.getElementById('serviceImg3').style.visibility = "visible";
    document.getElementById('serviceSection3').style.cssText = "border: none; height: 240px;";
}
function normalImg3(x) {
    document.getElementById('serviceImg3').style.visibility = "hidden";
    document.getElementById('serviceSection3').style.cssText = "border: 5px solid #131921; height: 200px;";
}

function bigImg4(x) {
    document.getElementById('serviceImg4').style.visibility = "visible";
    document.getElementById('serviceSection4').style.cssText = "border: none; height: 240px;";
}
function normalImg4(x) {
    document.getElementById('serviceImg4').style.visibility = "hidden";
    document.getElementById('serviceSection4').style.cssText = "border: 5px solid #131921; height: 200px;";
}

function bigImg5(x) {
    document.getElementById('serviceImg5').style.visibility = "visible";
    document.getElementById('serviceSection5').style.cssText = "border: none; height: 240px;";
}
function normalImg5(x) {
    document.getElementById('serviceImg5').style.visibility = "hidden";
    document.getElementById('serviceSection5').style.cssText = "border: 5px solid #131921; height: 200px;";
}

function bigImg6(x) {
    document.getElementById('serviceImg6').style.visibility = "visible";
    document.getElementById('serviceSection6').style.cssText = "border: none; height: 240px;";
}
function normalImg6(x) {
    document.getElementById('serviceImg6').style.visibility = "hidden";
    document.getElementById('serviceSection6').style.cssText = "border: 5px solid #131921; height: 200px;";
}
 function remover1(x){
    document.getElementById('nav1').style.position = "initial";
 }
function remover2(x){
    document.getElementById('nav1').style.position = "sticky";
}
let slideIndex = 2;
showSlides(slideIndex);
function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dots");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        // console.log(style.length);
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        console.log(dots.length);
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
