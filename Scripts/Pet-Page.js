
var petImageArray = [];
addAllImages();

function loadPets() {
  addImages();
}

function addAllImages() {
  petImageArray = [];
  petImageArray.push("Images/Pets/My Pets/Commodore-Main.jpg");
  petImageArray.push("Images/Pets/My Pets/Bacon-Main.jpg");
  petImageArray.push("Images/Pets/My Pets/Pebbles-Main.jpg");
  petImageArray.push("Images/Pets/My Pets/Mark-Main.jpg");
  petImageArray.push("Images/Pets/My Pets/Kiwi-Main.jpg");
  petImageArray.push("Images/Pets/Grandparents/Pete1.jpg");
  petImageArray.push("Images/Pets/Parents/fergus1.png");
  petImageArray.push("Images/Pets/Parents/fergus2.jpg");
  petImageArray.push("Images/Pets/Parents/stink1.png");
  petImageArray.push("Images/Pets/Parents/stink2.png");
  petImageArray.push("Images/Pets/Parents/stink3.jpeg");
  petImageArray.push("Images/Pets/Parents/sydney2.jpeg");
  petImageArray.push("Images/Pets/Parents/sydney3.jpeg");
  petImageArray.push("Images/Pets/Brother/kevin.jpg");
  petImageArray.push("Images/Pets/Brother/randy.jpg");
  petImageArray.push("Images/Pets/Brother/timmy.jpg");

  petImageArray.sort(() => Math.random() -0.5);
}

function addImages() {
var initialArrayLength = petImageArray.length;

for (var i=0; i<initialArrayLength; i++) {
  
    var newCol = document.createElement("div");   // Create a new column
    newCol.className = "col-6 col-sm-2 d-flex align-items-center";
    newCol.style.marginBottom = "1em";
    newCol.addEventListener('click', Img_Clicked, false);
  
    var newImg = document.createElement("img");   // And a new image element
    newImg.className = "carousel-image petImg";
    newImg.src = petImageArray[petImageArray.length - 1];
    newImg.id = "Img" + i;
  
    newCol.appendChild(newImg);
    document.getElementById("petGalleryRow").appendChild(newCol);    // Append them

    petImageArray.pop(petImageArray[0]);   // And remove element from array
  }
  fadeInPics(initialArrayLength);
}

function petFilter_Clicked(keyword) {
  // Reset array
  addAllImages();
  // Clear pics
  fadeOutPics();
  // Repopulate
  setTimeout(repopulate, 1500, keyword);
}

function Img_Clicked(e) {
  // var clickedImg = e.target.id;
  document.getElementById("petPopUp").src = e.target.src;
  document.getElementById("petPopUp").style.display = "block";
  document.getElementById("page-mask").style.zIndex = 9999;
  document.getElementById("petPageBackground").classList.add("is-blurred");
}
  
function fadeInPics(initialArrayLength) {
  // for(var i=0; i<initialArrayLength; i++) {
  //   document.getElementById("Img"+i).style.opacity = 1;
  // } 
  var allPics = document.getElementsByClassName("petImg");
  if(document.getElementById("Img0")) {   // If there are any pics on the page
    for (var i=0; i<allPics.length; i++) {
      allPics[i].style.opacity = "1";
    }
  }
}

function fadeOutPics() {
  var allPics = document.getElementsByClassName("petImg");
  if(document.getElementById("Img0")) {   // If there are any pics on the page
    for (var i=0; i<allPics.length; i++) {
      allPics[i].style.opacity = "0";
    }
  }
}

function repopulate(keyword) {
  document.getElementById("petGalleryRow").innerHTML = "";    // Clear the page
      
    var length = petImageArray.length;

    for (var i=0; i<length; i++) {
      if(!(petImageArray[i].includes(keyword))) {   // Filter with keyword
        petImageArray.splice(i, 1);
        i--;
        length--;
      }
    } 
    addImages();    // Add new list of images to page
}
