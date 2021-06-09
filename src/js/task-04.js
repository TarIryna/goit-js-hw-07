let counterValue = 0;

const refs = {
    decrementBtn: document.querySelector('[data-action = "decrement"]'),
    incrementBtn: document.querySelector('[data-action = "increment"]'),
    value: document.querySelector('[id = "value"]'),
};

refs.decrementBtn.addEventListener('click', decrementValue);
refs.incrementBtn.addEventListener('click', incrementValue);

function decrementValue() {
    refs.value.textContent = counterValue -=1;
}
function incrementValue() {
    refs.value.textContent = counterValue +=1;
}
console.log(refs.incrementBtn);