const inputText = document.getElementById('text-input');
inputText.oninput = (e) => {
    const textMeme = document.getElementById('meme-text');

    textMeme.innerText = e.target.value;
};

const imageInsert = document.getElementById('meme-insert');
imageInsert.onchange = (e) => {
    const imageMeme = document.getElementById('meme-image');

    const file = e.target.files[0];
    imageMeme.src = URL.createObjectURL(file);
};

const containerChanges = document.getElementById('changes-atributtes');
containerChanges.onclick = (e) => {
    const imagesContainer = document.getElementById('meme-image-container');

    if (e.target.tagName !== 'BUTTON') return;
    imagesContainer.className = e.target.id;
};

const images = document.getElementById('images');
images.onclick = (e) => {
    const imageMeme = document.getElementById('meme-image');

    if (e.target.tagName !== 'IMG') return;
    imageMeme.src = e.target.getAttribute('src');
};