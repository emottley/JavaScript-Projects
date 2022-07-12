let slideIndex = 1; //declares global variable used to indicate active slide
showSlides(slideIndex); //calls function showSlides for current slide. Parameter of slideIndex to indicate which slide is active.

//Next/previous controls
function plusSlides(n) { //declaring function to use when moving between slides with arrows
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) { //function declared to indicate active slide, and using dots to navigate slides
    showSlides(slideIndex = n);
}

function showSlides(n) { //declaring main function for slideshow.
    let i; //declaring i for use in loop and positioning of cureent slide
    let slides = document.getElementsByClassName("mySlides"); //linking variables between html and js
    let dots = document.getElementsByClassName("dot"); //linking variables between html and js
    if (n > slides.length) {slideIndex = 1} //allows slide to loop back to 1, after reaching last slide

    if (n < 1) {slideIndex = slides.length} //allows slide to loop back to 3, after going to previous slide of 1

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function countdown() { //declaring countdown function for use outside of slideshow
    var seconds = document.getElementById("seconds").value; //pulls value from input of html doc

    function tick() { //declaring function
        seconds = seconds - 1; //subtracts 1 second, each second
        timer.innerHTML = seconds; //sends variable seconds to html doc from js
        var time  = setTimeout(tick, 1000);
        if (seconds == -1) { //if statement to send alert box in html once time reaches end. Function also clears the time variable and is ready to be run again.
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick(); //calling function
}