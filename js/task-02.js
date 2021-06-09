const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('ul');
const ingElements = ingredients.map(ing => {
  const ingEl = document.createElement('li');
  ingEl.textContent = ing;
  return ingEl;
});

ingredientsList.append(...ingElements);