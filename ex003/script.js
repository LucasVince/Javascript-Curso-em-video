let inicio = document.getElementById('inicio');
let fim = document.getElementById('fim');
let passos = document.getElementById('passos');

const paragrafo = document.getElementById('rest');
const btn = document.querySelector('button');

const contar = () => {
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        alert('Preencha os campos de forma correta');
    }
    
    else {
        paragrafo.textContent = 'Contando: '

        let i = parseInt(inicio.value);
        let f = parseInt(fim.value);
        let p = parseInt(passos.value);

        if (i < f) {
            for (i; i <= f; i += p) {
                paragrafo.textContent += `${i} \u{1F449} `;
            }
        } else {
            for (i; i >= f; i -= p) {
                paragrafo.textContent += `${i} \u{1F449} `;
            }
        }

        paragrafo.textContent += `\u{1F3C1}`;

        inicio.value = '';
        fim.value = '';
        passos.value = '';
    }
}

btn.addEventListener('click', contar);