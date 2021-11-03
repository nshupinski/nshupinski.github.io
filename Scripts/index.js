
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