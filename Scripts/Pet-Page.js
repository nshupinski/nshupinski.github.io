
var petImageArray = [];
addAllImages();

var currentRow = 1;

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

  var number_of_img = document.getElementById("petGalleryRow" + currentRow).getElementsByTagName("div").length;

  if(number_of_img < 5) {   // If the row isn't full
  
    var newCol = document.createElement("div");   // Create a new column
    newCol.classList.add("col-2");
  
    var newImg = document.createElement("img");   // And a new image element
    newImg.classList.add("carousel-image");
    newImg.src = petImageArray[petImageArray.length - 1];
  
    newCol.appendChild(newImg);
    document.getElementById("petGalleryRow" + currentRow).appendChild(newCol);    // Append them

    petImageArray.pop(petImageArray[0]);   // And remove element from array
  }
  else {    // If row is full
    currentRow++;
    var newRow = document.createElement("div");   // Create a new row
    newRow.className = "row justify-content-center";
    newRow.id = "petGalleryRow" + currentRow;
    newRow.style.marginTop = "2em";
  
    document.getElementById("petList").appendChild(newRow);   //Append it
    i--;
  }
}
}



