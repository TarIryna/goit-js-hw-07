const destroyBtn = document.querySelector('[data-action="destroy"]');
const renderBtn = document.querySelector('[data-action = "render"]');
const input08 = document.querySelector(['input']);
const boxesContainer = document.querySelector('[id="boxes"]');
let size = 30;
let rgb = 25;
let amount = 0;

console.log(boxesContainer.children);
let boxesCollection = [];

input08.addEventListener('input', onInput);
function onInput(event) {
    amount = Number(event.currentTarget.value);
    boxesContainer.textContent = '';
    boxesCollection = [];
    console.log(amount);
}
renderBtn.addEventListener('click', createBoxes);
function createBoxes() {
    if (amount > 0) {
        for (let i = 0; i < amount; i += 1) {
            size += 10;
            rgb += 25;
            const div = document.createElement('div');
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            div.style.background = `rgb(255,100,${rgb})`;
            div.style.margin = "20px";
            boxesCollection.push(div);
        }    
    }
    else{ console.log('количество квадратов 0');}
   boxesContainer.append(...boxesCollection);
    // }
}
        

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
    boxesContainer.textContent = '';
}