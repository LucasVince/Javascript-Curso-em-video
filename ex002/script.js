let anoAtual = 2024;
let idade;
let sexo;

const anoIdade = document.querySelector('#anoDeNascimento');
const btn = document.querySelector('button');
const p = document.querySelectorAll('p')[2];
const radioBtn = document.getElementsByName('radioSexo');
const img = document.querySelector('img');

anoIdade.setAttribute('min', anoAtual - 1000)
anoIdade.setAttribute('max', anoAtual)

const verificar = () => {
    if (anoIdade.value.length == 0 || anoIdade.value < anoAtual - 1000 || anoIdade.value > anoAtual) {
        alert('Preencha os campos para poder prosseguir!!!')
    } else {
        if (radioBtn[0].checked) {
            sexo = 'M';
        } else {
            sexo = 'F';
        }

        idade = anoAtual - parseInt(anoIdade.value);

        if (sexo == 'M') {
            p.textContent = `Homem de ${idade} anos`;
            if (idade <= 10) {
                img.src = 'img/h-1.jpg';
            }
            
            else if (idade > 10 && idade <= 25) {
                img.src = 'img/h-2.jpg';
            }
            
            else if (idade > 25 && idade < 60) {
                img.src = 'img/h-3.jpg';
            }

            else {
                img.src = 'img/h-4.jpg';
            }
        }
        
        else {
            p.textContent = `Mulher de ${idade} anos`;

            if (idade <= 10) {
                img.src = 'img/m-1.jpg';
            }
            
            else if (idade > 10 && idade <= 25) {
                img.src = 'img/m-2.jpg';
            }

            else if (idade > 25 && idade < 60) {
                img.src = 'img/m-3.jpg';
            }

            else {
                img.src = 'img/m-4.jpg';
            }
        }
    }
}

btn.addEventListener('click', verificar);