const div = document.getElementById('tab');
const input = document.getElementById('num');
const btn = document.querySelector('button');

const tabuada = () => {
    if (input.value.length == 0) {
        alert('Preencha os campos corretamente');
    }
    
    else {
        div.innerHTML = '';

        let num = parseInt(input.value)

        for (let i = 1; i <= 10; i++) {
            let p = document.createElement('p');
            let pTexto = document.createTextNode(`${num} x ${i} = ${num * i}`);

            p.appendChild(pTexto);

            div.appendChild(p);
        }
        input.value = '';
    }
}

btn.addEventListener('click', tabuada);