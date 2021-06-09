
const input = document.querySelector('[id="validation-input"]');
const inputLength = Number(input.getAttribute('data-length'));
// const inputLen = input.attributes[2].value;
input.addEventListener('change', onInputChange);

function onInputChange(event) {
    const targetLength = event.currentTarget.value.length;
    if (inputLength !== targetLength) {
        input.classList.remove('js-valid');
        input.classList.add('js-invalid');
        console.log('bad');
     
    }
    else {
        input.classList.remove('js-invalid');
        input.classList.toggle('js-valid');
        console.log('good');
    }

}
