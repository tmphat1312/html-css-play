function uploadImage() {
  var fileInput = document.querySelector("#file-upload");
  var image = document.querySelector(".image img");
  var messageBox = document.querySelector(".message");
  var uploadChange = document.querySelector(".upload__change");

  fileInput.addEventListener("input", evt => {
    let file = evt.target.files[0];

    console.log( file );

    if (!file
        || isInvalidType(file, 'jpeg')
        || !isValidSize(file, 1024 * 1024 * 5)
      ) {
      messageBox.classList.remove("valid");
      messageBox.classList.add("invalid");
    }
    else {
      messageBox.classList.remove("invalid");
      messageBox.classList.add("valid");
      uploadChange.style.display = "initial";

      image.src = URL.createObjectURL(file);
      image.style.display = "initial";
    }
  });


  function isInvalidType(file, type) {
    return file.name.endsWith(type);
  }

  function isValidSize(file, size) {
    return file.size <= size;
  }
}

uploadImage();