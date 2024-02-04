const selectBtn = document.querySelector('.select-btn');
const selectedImage = document.querySelector('#imageContainer');
const resizedImageForm = document.querySelector('.resizedImage-form');

selectBtn.addEventListener('click', () => {
    selectedImage.textContent = ''
    createImages();
    resizedImageForm.style.display = 'block';
})

function srcImage() {
    let selectElement = document.getElementById('mySelect');
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;
    console.log(selectedValue);

    if(selectedValue == 'dog'){
        return '../images/resize/dog.jpg'
    };
    if(selectedValue == 'black'){
        return '../images/resize/black.jpg'
    };
    if(selectedValue == 'forest'){
        return '../images/resize/forest.jpg'
    };
}

function createImages(){
    let img = document.createElement('img');

    img.src = srcImage()

    selectedImage.insertBefore(img, selectedImage.firstElementChild);
}



document.getElementById('downloadButton').addEventListener('click', function() {
    const widthInput = document.getElementById('widthInput').value;
    const heightInput = document.getElementById('heightInput').value;
    
    const selectedImage = document.querySelector('#imageContainer img');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = widthInput;
    canvas.height = heightInput;
    
    ctx.drawImage(selectedImage, 0, 0, widthInput, heightInput);
    
    const url = canvas.toDataURL('image/jpeg');
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resized_image.jpg';
    document.body.appendChild(a);
    a.click();
  });