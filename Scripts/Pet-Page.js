
var petImageArray = [];
addAllImages();

function loadPets() {
  addNewImage();
}

function addAllImages() {
  petImageArray.push("Images/Pets/Commodore-Main.jpg");
  petImageArray.push("Images/Pets/Bacon-Main.jpg");
  petImageArray.push("Images/Pets/Pebbles-Main.jpg");
  petImageArray.push("Images/Pets/Mark-Main.jpg");
  petImageArray.push("Images/Pets/Kiwi-Main.jpg");
}

function addNewImage() {


var initialArrayLength = petImageArray.length;

for (var i=0; i<initialArrayLength; i++) {
  
    var newCol = document.createElement("div");   // Create a new column
    newCol.className = "col-6 col-sm-2";
    newCol.style.marginBottom = "1em";
  
    var newImg = document.createElement("img");   // And a new image element
    newImg.classList.add("carousel-image");
    newImg.src = petImageArray[petImageArray.length - 1];
  
    newCol.appendChild(newImg);
    document.getElementById("petGalleryRow").appendChild(newCol);    // Append them

    petImageArray.pop(petImageArray[0]);   // And remove element from array
  }
}



