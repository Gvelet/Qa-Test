const inputText = document.getElementById('inputText');
const totalChars = document.getElementById('totalChars');
const noSpaces = document.getElementById('noSpaces');
const wordCount = document.getElementById('wordCount');
const cyrillicChars = document.getElementById('cyrillicChars');
const latinChars = document.getElementById('latinChars');
const digitCount = document.getElementById('digitCount');
const specialChars = document.getElementById('specialChars');
const copyIcon = document.getElementById('copyIcon');

function updateCharacterCount(text) {
    totalChars.textContent = text.length;
    noSpaces.textContent = text.replace(/\s/g, '').length;
}

function updateWordCount(text) {
    const words = text.match(/[\wа-яё'-]+/gi);
    wordCount.textContent = words ? words.length : 0;
}

function updateCharacterTypeCount(text) {
    cyrillicChars.textContent = text.match(/[а-яё]/gi) ? text.match(/[а-яё]/gi).length : 0;
    latinChars.textContent = text.match(/[a-z]/gi) ? text.match(/[a-z]/gi).length : 0;
    digitCount.textContent = text.match(/\d/g) ? text.match(/\d/g).length : 0;
    specialChars.textContent = text.replace(/[a-zа-яё\d\s]/gi, '').length;
}

function toggleCopyIconVisibility(text) {
    if (text.length > 0) {
        copyIcon.style.display = 'inline';
        copyIcon.addEventListener('click', () => {
            navigator.clipboard.writeText(text);
        });
    } else {
        copyIcon.style.display = 'none';
    }
}

inputText.addEventListener('input', () => {
    const text = inputText.value;

    updateCharacterCount(text);
    updateWordCount(text);
    updateCharacterTypeCount(text);
    toggleCopyIconVisibility(text);
});
