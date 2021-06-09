const input07 = document.querySelector('[id="font-size-control"]');
const text = document.querySelector('[id="text"]');
text.style.fontSize = '20px';
console.log(text.attributes);

input07.addEventListener('input', onInput);
function onInput(event) {
    const inputValue = event.currentTarget.value;
    text.style.fontSize = inputValue+'px';
    // text.classList.add('input-size');
}
