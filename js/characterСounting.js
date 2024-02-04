const inputText = document.getElementById('inputText');
const totalChars = document.getElementById('totalChars');
const noSpaces = document.getElementById('noSpaces');
const wordCount = document.getElementById('wordCount');
const cyrillicChars = document.getElementById('cyrillicChars');
const latinChars = document.getElementById('latinChars');
const digitCount = document.getElementById('digitCount');
const specialChars = document.getElementById('specialChars');
const copyIcon = document.getElementById('copyIcon');

inputText.addEventListener('input', () => {
    const text = inputText.value;
    
    totalChars.textContent = text.length;
    noSpaces.textContent = text.replace(/\s/g, '').length;
    
    const words = text.match(/\b\w+\b/g);
    wordCount.textContent = words ? words.length : 0;
    
    cyrillicChars.textContent = text.match(/[а-я]/gi) ? text.match(/[а-я]/gi).length : 0;
    latinChars.textContent = text.match(/[a-z]/gi) ? text.match(/[a-z]/gi).length : 0;
    digitCount.textContent = text.match(/\d/g) ? text.match(/\d/g).length : 0;
    specialChars.textContent = text.replace(/[a-zа-я\d\s]/gi, '').length;

    if (text.length > 0) {
        copyIcon.style.display = 'inline';
        copyIcon.addEventListener('click', () => {
            navigator.clipboard.writeText(text);
        });
    } else {
        copyIcon.style.display = 'none';
    }
});