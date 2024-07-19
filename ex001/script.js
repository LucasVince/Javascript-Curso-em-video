let hora = new Date().getHours();

const title = document.querySelector('h1');
const img = document.querySelector('img');
const cev = document.querySelectorAll('p')[1];
const p = document.querySelectorAll('p')[0];

let hora_horas = hora == 1 ? 'hora' : 'horas';

if (hora >= 6 && hora <= 11) {
    img.src = 'img/manha.jpg';
    title.parentElement.style.backgroundColor = '#edcc85';
    title.style.color = 'black';
    cev.style.color = 'black';
    p.textContent = `Bom dia, agora são ${hora} ${hora_horas}`;
}

else if (hora >= 12 && hora <= 18) {
    img.src = 'img/tarde.jpg';
    title.parentElement.style.backgroundColor = '#bd926f';
    title.style.color = 'white';
    cev.style.color = 'white';
    p.textContent = `Boa tarde, agora são ${hora} ${hora_horas}`;
}

else if (hora >= 19 || hora <= 5) {
    img.src = 'img/noite.jpg';
    title.parentElement.style.backgroundColor = '#171a2e';
    title.style.color = 'white';
    cev.style.color = 'white';
    p.textContent = `Boa noite, agora são ${hora} ${hora_horas}`;
}
