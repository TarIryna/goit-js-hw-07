const itemQuantity = document.querySelectorAll('.item');
console.log(`В списке ${itemQuantity.length} категории.`);

itemQuantity.forEach(category => {
    const categoryName = category.querySelector('h2');
    const categoryQuantity = category.querySelectorAll('li');
    console.log(`Категория: ${categoryName.textContent}`);
    console.log(`Количество элементов: ${categoryQuantity.length}`);
});

