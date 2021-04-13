// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}


// Transition to different image when scrolling past X
let content = document.getElementById('content')
let scrollChange = 0
let bgimg2 = document.querySelector('.bgimg2');

window.addEventListener('scroll', (e) => {
    let {top} = content.getBoundingClientRect();
    if(top + window.innerHeight < scrollChange) {
        bgimg2.classList.add('visible');
    } else {
        bgimg2.classList.remove('visible');
    }
})

// var initialSrc = "/assets/images/imgLeft1.JPG";
// var scrollSrc = "/assets/images/imgLeft2.JPG'";

// $(window).scroll(function() {
//    var value = $(this).scrollTop();
//    if (value > 100)
//       $(".bgimg").attr("src", scrollSrc);
//    else
//       $(".bgimg").attr("src", initialSrc);
// });