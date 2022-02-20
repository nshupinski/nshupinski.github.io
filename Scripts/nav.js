
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
        navScrollDown();
      }
      if(perc < 3){
        navScrollUp();
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
      /* >9% */
      if(perc > 9){
        nav.style.background = "rgba(255, 255, 255, 1)";
      }
});


function navScrollDown() {
  document.getElementById("logo").style.color = "#577a75";
  document.getElementById("about-me-nav").style.color = "#577a75";
  document.getElementById("projects-nav").style.color = "#577a75";
  document.getElementById("resume-nav").style.color = "#577a75";
  document.getElementById("contact-nav").style.color = "#577a75";
}
function navScrollUp() {
  document.getElementById("logo").style.color = "rgba(255, 255, 255, 0.75)";
  document.getElementById("about-me-nav").style.color = "rgba(255, 255, 255, 0.75)";
  document.getElementById("projects-nav").style.color = "rgba(255, 255, 255, 0.75)";
  document.getElementById("resume-nav").style.color = "rgba(255, 255, 255, 0.75)";
  document.getElementById("contact-nav").style.color = "rgba(255, 255, 255, 0.75)";
}

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