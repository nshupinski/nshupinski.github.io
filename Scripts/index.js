
window.onload = function () {

    /* Check if on Climbing slide 2 or 3 (portrait sizes) */
    $('#carouselClimbing').on('slide.bs.carousel', function onSlide (ev) {
        var id = ev.relatedTarget.id;
        if (id == "climbing3") {
          document.getElementById("climbingImg3").style.width = "38%";
        }
        if (id == "climbing5") {
            document.getElementById("climbingImg5").style.width = "43%";
        }
      })

    /* Check if on Blender slide 2 or 3 (portrait sizes) */
  $('#carouselBlender').on('slide.bs.carousel', function onSlide (ev) {
    var id = ev.relatedTarget.id;
    if (id == "blender2") {
      document.getElementById("blenderImg2").style.width = "33%";
    }
    if (id == "blender3") {
        document.getElementById("blenderImg3").style.width = "57%";
    }
  })
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
    var catGif = document.getElementById("catGif");
    catGif.src = "Images/Gifs/cat-runningCropped.gif"
    catGif.style.paddingBottom = "2em";
    catGif.style.width = "11%";
    document.getElementById("gifClickMe").style.display = "none";
    catTransition(catGif);
}

function catTransition(catGif) {
    document.getElementById("catGif").style.transform = "translateX(900%)";
}

