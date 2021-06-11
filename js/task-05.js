const refs = {
    input: document.querySelector('[id="name-input"]'),
    nameLabel: document.querySelector('[id="name-output"]'),
};

refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
    if (refs.input.value.trim()) {
        refs.nameLabel.textContent = event.currentTarget.value;
    }
    else {refs.nameLabel.textContent = "незнакомец";}
}