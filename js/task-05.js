const refs = {
    input: document.querySelector('[id="name-input"]'),
    nameLabel: document.querySelector('[id="name-output"]'),
};
refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    refs.nameLabel.textContent = event.currentTarget.value;
}