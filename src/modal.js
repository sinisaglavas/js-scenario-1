import {getExpenses, renderExpenses, showTotal, updateExpense} from "./functions.js";
import {categories} from "./ui.js";


const modal = document.getElementById('myModal');
const editName = document.getElementById('edit-name');
const editAmount = document.getElementById('edit-amount');
const editCategory = document.getElementById('edit-category');

let index = null

const expenses = getExpenses();

export function showExpense() {

    document.getElementById('expenses-div').addEventListener('click', (e) => {

        if (e.target.classList.contains('edit-btn')) {
            index = e.target.dataset.index;

            if (index !== undefined) {
                const showExpense = expenses[index];

                editName.value = showExpense.name;
                editAmount.value = showExpense.amount;

                categories('edit-category', showExpense.category);
                modal.style.display = 'block';
            }
        }
    });
}

export function editExpense() {
    const saveAndClose = document.getElementById('save-btn');
    saveAndClose.addEventListener('click', () => {

        updateExpense(index, editName.value, editAmount.value, editCategory.value);
        renderExpenses();
        showTotal();

        index = null;

        localStorage.setItem('expenses', JSON.stringify(getExpenses()));

        modal.style.display = 'none';
    });
}

export function closeModal() {
    document.getElementById('close-btn').addEventListener('click', () => {

        modal.style.display = 'none';
    });
}