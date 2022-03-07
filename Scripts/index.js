
window.onload = function () {

    /* Check screen size for if line should come after name in nav */
    if(screen.width < 992) {
        document.getElementById("logo").innerHTML = "Nicholas Shupinski";
    }

    /* Check if on Climbing slide 2 or 3 (portrait sizes) */
    $('#carouselClimbing').on('slide.bs.carousel', function onSlide (ev) {
        var id = ev.relatedTarget.id;
        if (id == "climbing3") {
          document.getElementById("climbingImg3").style.width = "38%";
        }
        if (id == "climbing5") {
            document.getElementById("climbingImg5").style.width = "43%";
        }
      });

    /* Check if on Blender slide 2 or 3 (portrait sizes) */
    $('#carouselBlender').on('slide.bs.carousel', function onSlide (ev) {
        var id = ev.relatedTarget.id;
        if (id == "blender2") {
            document.getElementById("blenderImg2").style.width = "33%";
        }
  })

    /* Click event for hamburger */
    document.getElementById("hamburger").addEventListener("click", function() {
        document.getElementById("nav").classList.toggle("solid");
        document.getElementById("logo").classList.toggle("transparent");
      });
};

function btnAccord_Clicked() {
    var btn = document.getElementById("btnAccord");
    btn.setAttribute("style", "background-color: #a6b6b4");
}


/* Show Project Modals */
function showProj1Modal() {
    document.getElementById('proj1Modal').style.display = "block";
    document.getElementById('headerBackground').className = "bg-img justify-content-center is-blurred";
    document.getElementById('page-mask').style.zIndex = "10";
}
function showProj2Modal() {
    document.getElementById('proj2Modal').style.display = "block";
    document.getElementById('headerBackground').className = "bg-img justify-content-center is-blurred";
    document.getElementById('page-mask').style.zIndex = "10";
}
function showProj3Modal() {
    document.getElementById('proj3Modal').style.display = "block";
    document.getElementById('headerBackground').className = "bg-img justify-content-center is-blurred";
    document.getElementById('page-mask').style.zIndex = "10";
}
function showProj4Modal() {
    document.getElementById('proj4Modal').style.display = "block";
    document.getElementById('headerBackground').className = "bg-img justify-content-center is-blurred";
    document.getElementById('page-mask').style.zIndex = "10";
}

/* Hide Project Modals */
function hideProj1Modal() {
    document.getElementById('proj1Modal').style.display = "none";
    document.getElementById('headerBackground').className = "bg-img justify-content-center";
    document.getElementById('page-mask').style.zIndex = "-10";
}
function hideProj2Modal() {
    document.getElementById('proj2Modal').style.display = "none";
    document.getElementById('headerBackground').className = "bg-img justify-content-center";
    document.getElementById('page-mask').style.zIndex = "-10";
}
function hideProj3Modal() {
    document.getElementById('proj3Modal').style.display = "none";
    document.getElementById('headerBackground').className = "bg-img justify-content-center";
    document.getElementById('page-mask').style.zIndex = "-10";
}
function hideProj4Modal() {
    document.getElementById('proj4Modal').style.display = "none";
    document.getElementById('headerBackground').className = "bg-img justify-content-center";
    document.getElementById('page-mask').style.zIndex = "-10";
}


function catGif_Clicked() {
    loadPets();
    var catGif = document.getElementById("catGif");
    fadeOutCat();
    $("#catGif").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){  
        catGif.style.transition = "transform 3000ms linear 500ms";
        catGif.src = "Images/Gifs/cat-runningCropped.gif";
        catGif.style.opacity = "1";
        var translateXValue;
        /* Mobile */
        if(screen.width < 576) {
            catGif.style.width = "35%";
            translateXValue = 380;
            catGif.style.marginLeft = "-30%";
            catGif.style.transition = "transform 2500ms linear 500ms";
        }
        /* Tablet */
        else if (screen.width > 576 && screen.width < 992) {
            catGif.style.marginLeft = "-9%";
        }
        /* Desktop */
        else {
            catGif.style.width = "11%";
            translateXValue = 1000;
            catGif.style.marginLeft = "-9%";
        }
        catTransition(translateXValue);
    });
}

function btnPetPageClose_Clicked() {
    document.getElementById("btnPetReopen").style.display = "inline";
    document.getElementById("petPageBackground").style.transform = "translateX(0%)";
}
function btnPetPageReopen_Clicked() {
    document.getElementById("petPageBackground").style.transform = "translateX(100%)";
}

function catTransition(translateXValue) {
    /* Fire after pet page ends transition */
    $("#petPageBackground").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){  
        document.getElementById("catGif").style.display = "none";
        document.getElementById("btnPetClose").style.opacity = "1";
        document.getElementById("petPageBackground").style.transition = "transform 1000ms linear 0ms";
    });

    /* Move Cat and Pet Page */
    document.getElementById("catGif").style.transform = "translateX(" + translateXValue + "%)";
    document.getElementById("petPageBackground").style.transform = "translateX(100%)";
}


function fadeOutCat() {
    document.getElementById("catGif").classList.toggle("fade");
    document.getElementById("gifClickMe").style.display = "none";
    catGif.style.paddingBottom = "2em";
}

function btnFilterDrop_Clicked() {
    var symbol = document.getElementById("btnPetFilterDrop").innerHTML;
    if(symbol.includes("+")) {
        document.getElementById("btnPetFilterDrop").innerHTML = "-"
    }
    else {
        document.getElementById("btnPetFilterDrop").innerHTML = "+"
    }
}

function pagemask_Clicked() {
    document.getElementById("page-mask").style.zIndex = -10;
    for(var i=1; i<5; i++) {
        document.getElementById("proj" + i + "Modal").style.display = "none";
    }
    /* for project modals */
    document.getElementById('headerBackground').className = "bg-img justify-content-center";

    /* for pet page */
    document.getElementById("petPopUp").style.display = "none";
    document.getElementById("petPageBackground").classList.remove("is-blurred");

}
