let input = 'santhosh';

const bodyEl = document.getElementById("content");
const inputEl1 = document.createElement('input');
const inputEl2 = document.createElement('input');

const divEl = document.createElement('div');

const pEl1 = document.createElement('p');
const pEl2 = document.createElement('p');

inputEl1.value = input;
inputEl2.value = input;

function render() {
    pEl1.innerHTML = 'From input 1, hi ' + input;
    divEl.appendChild(pEl1)
    divEl.appendChild(inputEl1);
    pEl2.innerHTML = 'From input 2, hi ' + input;
    divEl.appendChild(pEl2);
    divEl.appendChild(inputEl2);
    bodyEl.appendChild(divEl);
}

render();


inputEl1.addEventListener('input', () => {
    input = inputEl1.value;
    render();
    inputEl2.value = input;
    inputEl1.focus();
})

inputEl2.addEventListener('input', () => {
    input = inputEl2.value.toUpperCase();
    inputEl2.value = input;
    render();
    inputEl1.value = input;
    inputEl2.focus();
})

