const grabImg = document.getElementById('img_gatito');
const grabImg2 = document.getElementById('img_perrito');
const grabButton = document.getElementById('btn_gatito');
const grabButton2 = document.getElementById('btn_perrito');

const enlace = 'https://aws.random.cat/meow'
const enlace2 = 'https://random.dog/woof.json'

grabButton.addEventListener("click", mostrarFoto)
grabButton2.addEventListener("click", mostrarFoto2)

function mostrarFoto() {
    fetch(enlace)
        .then(res => res.json())
        .then(data => {
            grabImg.src = `${data.file}`;
    });
}

function mostrarFoto2() {
    fetch(enlace2)
        .then(res => res.json())
        .then(data => {
            grabImg2.src = `${data.url}`;
    });
}