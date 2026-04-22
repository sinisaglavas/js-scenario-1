
export function categories(id, currentValue = null) {
    const categoryElement = document.getElementById(id);
    categoryElement.innerHTML = '';

    const categories = ['-- Category --', 'Food', 'Transport', 'Entertainment', 'Shopping', 'Fuel', 'Health'];

    for (let i = 0; i < categories.length; i++) {
        const option = document.createElement('option');
        if (categories[i] === '-- Category --') {
            option.value = 'undefined';
            option.innerText = categories[i];
            categoryElement.appendChild(option);
        } else {
            option.value = categories[i];
            option.innerText = categories[i];
            categoryElement.appendChild(option);
        }

        if (currentValue === categories[i]) {
            option.selected = true;
        }
    }
}