const divExibir = document.getElementById('exibicao');
const divResultado = document.getElementById('res');
const input = document.getElementById('num');
const btnAdd = document.getElementById('add');
const btnFinalizar = document.getElementById('finalizar');

let arr = [];

const add = () => {
    if (input.value.length == 0 || arr.includes(parseInt(input.value))) {
        alert('Preencha os campos corretamente, cerifique se o numero digita ja consta na lista ou se o campo foi preenchido');
    } else {
        num = parseInt(input.value);
        
        arr.push(num);
        
        pExibir = document.createElement('p');
        pExibir_Texto = document.createTextNode(`valor ${num} adicionado`);
        
        pExibir.appendChild(pExibir_Texto);
        
        divExibir.appendChild(pExibir);
        
        input.value = '';

        btnFinalizar.addEventListener('click', finalizar);
    }
}

const finalizar = () => {
    divExibir.innerHTML = '';
    divResultado.innerHTML = '';

    pNumTotal = document.createElement('p');
    pNumTotal_Texto = document.createTextNode(`Ao todo, temos ${arr.length} numeros cadastrados.`);
    pNumTotal.appendChild(pNumTotal_Texto);
    
    pMaiorNum = document.createElement('p');
    pMaiorNum_Texto = document.createTextNode(`O maior valor informado foi ${Math.max(...arr)}.`);
    pMaiorNum.appendChild(pMaiorNum_Texto);
    
    pMenorNum = document.createElement('p');
    pMenorNum_Texto = document.createTextNode(`O menor valor informado foi ${Math.min(...arr)}.`);
    pMenorNum.appendChild(pMenorNum_Texto);
    
    const soma = arr.reduce((acumulador, valAtual) => acumulador + valAtual, 0);

    pSoma = document.createElement('p');
    pSoma_Texto = document.createTextNode(`Somando todos os valores, temos ${soma}.`);
    pSoma.appendChild(pSoma_Texto);

    pMedia = document.createElement('p');
    pMedia_Texto = document.createTextNode(`A média dos valores cadastrados é ${soma / arr.length}.`);
    pMedia.appendChild(pMedia_Texto);
    
    divResultado.appendChild(pNumTotal);
    divResultado.appendChild(pMaiorNum);
    divResultado.appendChild(pMenorNum);
    divResultado.appendChild(pSoma);
    divResultado.appendChild(pMedia);
}

btnAdd.addEventListener('click', add);