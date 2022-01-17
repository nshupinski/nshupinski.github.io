
var petImageArray = [];
addAllImages();

function loadPets() {
  addImages();
}

function addAllImages() {
  petImageArray.push("Images/Pets/My Pets/Commodore-Main.jpg");
  petImageArray.push("Images/Pets/My Pets/Bacon-Main.jpg");
  petImageArray.push("Images/Pets/My Pets/Pebbles-Main.jpg");
  petImageArray.push("Images/Pets/My Pets/Mark-Main.jpg");
  petImageArray.push("Images/Pets/My Pets/Kiwi-Main.jpg");
  petImageArray.push("Images/Pets/Grandparents/Pete1.jpg");
}

function addImages() {

var initialArrayLength = petImageArray.length;

for (var i=0; i<initialArrayLength; i++) {
  
    var newCol = document.createElement("div");   // Create a new column
    newCol.className = "col-6 col-sm-2";
    newCol.style.marginBottom = "1em";
  
    var newImg = document.createElement("img");   // And a new image element
    newImg.className = "carousel-image petImg";
    newImg.src = petImageArray[petImageArray.length - 1];
  
    newCol.appendChild(newImg);
    document.getElementById("petGalleryRow").appendChild(newCol);    // Append them

    petImageArray.pop(petImageArray[0]);   // And remove element from array
  }
}

function petFilter_Clicked(keyword) {
  // Reset array
  petImageArray = [];
  addAllImages();

  // Clear pics
  document.getElementById("petGalleryRow").innerHTML = "";

  var length = petImageArray.length;

  for (var i=0; i<length; i++) {
    if(!(petImageArray[0].includes(keyword))) {
      petImageArray.splice(petImageArray[0], 1);
    }
  } 
  addImages();
}

