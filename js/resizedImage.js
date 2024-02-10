const selectBtn = document.querySelector('.select-btn');
const selectedImage = document.querySelector('#imageContainer');
const resizedImageForm = document.querySelector('.resizedImage-form');

selectBtn.addEventListener('click', () => {
    selectedImage.textContent = ''
    displayPicture();
    resizedImageForm.style.display = 'block';
})

function selectingPicture() {
    const selectElement = document.getElementById('mySelect');
    let selectedValue = selectElement.options[selectElement.selectedIndex].value;

    return `../images/resize/${selectedValue}.jpg`
}

function displayPicture(){
    let img = document.createElement('img');
    img.src = selectingPicture()
    selectedImage.insertBefore(img, selectedImage.firstElementChild);
}

function resizeImage() {
    const widthInput = document.getElementById('widthInput').value;
    const heightInput = document.getElementById('heightInput').value;
    
    const selectedImage = document.querySelector('#imageContainer img');
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = widthInput;
    canvas.height = heightInput;
    
    ctx.drawImage(selectedImage, 0, 0, widthInput, heightInput);
    
    const url = canvas.toDataURL('image/jpeg');
    
    return url;
  }

function downloadResizedImage() {
    const url = resizeImage();
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resized_image.jpg';
    
    document.body.appendChild(a);
    a.click();
}

document.getElementById('downloadButton').addEventListener('click', downloadResizedImage);