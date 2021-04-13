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
let scrollChange = -500
let bgimg = document.getElementById('bgimg');

window.addEventListener('scroll', (e) => {
    let {top} = content.getBoundingClientRect();
    if(top - window.innerHeight < scrollChange) {
        bgimg.style.backgroundImage = url('/assets/images/imgLeft2.JPG')
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