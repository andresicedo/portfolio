// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}

// let content = document.getElementById('content')
// let scrollChange = -500

// window.addEventListener('scroll', (e) => {
//     let bgimg = document.getElementById('bgimg');
//     let {top} = content.getBoundingClientRect();
//     if(top - window.innerHeight < scrollChange) {
//         bgimg.style.backgroundImage = '/assets/images/imgLeft2.JPG'
//     }
// })