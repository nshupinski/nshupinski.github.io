/* Add Event Listener to check if at top of page */
window.addEventListener("scroll",function(){

    var nav = document.getElementById("nav");
    var perc = getScrollPercent();

    if(this.window.scrollY == 0){
      nav.style.background = "rgba(255, 255, 255, 0)";
      
    }
    /* Top */
    if(perc < 1 && perc > 0){
        nav.style.background = "rgba(255, 255, 255, 0.1)";
        var navs = document.getElementsByClassName("nav-link");
        for(i = 0; i < navs.length; i++) {
            navs[i].style.fontWeight = "bold";
        }
      }
      /* 1% */
      if(perc < 2 && perc > 1){
        nav.style.background = "rgba(255, 255, 255, 0.2)";
      }
      /* 2% */
      if(perc < 3 && perc > 2){
        nav.style.background = "rgba(255, 255, 255, 0.3)";
      }
      /* 3% */
      if(perc > 3){
        var navs = document.getElementsByClassName("nav-link");
        for(i = 0; i < navs.length; i++) {
            navs[i].style.color = "black !important";
            navs[i].style.fontWeight = "normal";
        }
        var logo = this.document.getElementById("logo");
        logo.style.color = "rgba(0, 0, 0)";
      }
      if(perc < 3){
        var navs = document.getElementsByClassName("nav-link");
        for(i = 0; i < navs.length; i++) {
            navs[i].style.fontWeight = "bold";
        }
      }
      if(perc < 4 && perc > 3){
        nav.style.background = "rgba(255, 255, 255, 0.4)";
      }
      /* 4% */
      if(perc < 5 && perc > 4){
        nav.style.background = "rgba(255, 255, 255, 0.5)";
      }
      /* 5% */
      if(perc < 6 && perc > 5){
        nav.style.background = "rgba(255, 255, 255, 0.6)";
      }
      /* 6% */
      if(perc < 7 && perc > 6){
        nav.style.background = "rgba(255, 255, 255, 0.7)";
      }
      /* 7% */
      if(perc < 8 && perc > 7){
        nav.style.background = "rgba(255, 255, 255, 0.8)";
      }
      /* 8% */
      if(perc < 9 && perc > 8){
        nav.style.background = "rgba(255, 255, 255, 1)";
      }
});

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

/* Check scroll location on page */
function Getpostion(){    
    var vscroll = document.body.scrollTop;    
    alert(vscroll);
}


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

