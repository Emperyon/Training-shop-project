//section of catagories
let acc = document.getElementsByClassName('accordion');
for (let i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', myFunk);
}

function myFunk() {
    this.classList.toggle('actived');
    let panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }
};

//section of slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var  slides = document.getElementsByClassName('mySlides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides, 3000);
}
// expanded image for shop section
function myFunction(imgs) {
    let expandImg = document.getElementById('expandedImg')
    expandImg.src = imgs.src;
    expandImg.parentElement.style.display = 'block';
}



