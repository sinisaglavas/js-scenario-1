import {addExpense, renderExpenses, showTotal, highlightInput, deleteExpense, getExpenses} from "./src/functions.js";
import {showToast} from "./src/toastMessage.js";
import {closeModal, editExpense, showExpense} from "./src/modal.js";
import {categories} from "./src/ui.js";

const historyDate = document.getElementById('history-date');
historyDate.innerText = 'History (' + new Date().toLocaleDateString() + ')';

const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", () => {
    let name = nameInput.value.trim();
    let amount = amountInput.value.trim();
    let category = document.getElementById('category').value;

    if (name === "" && amount === "") {
        showToast("Please enter a name and amount expense!");
        highlightInput(nameInput, 'input-error');
        highlightInput(amountInput, 'input-error');
        return;
    }

    if (name === "") {
        const statusExpense = document.getElementById("status-expense");
        statusExpense.innerText = "Please enter a expense name!";
        setTimeout(() => statusExpense.innerText = "", 3000);
        highlightInput(nameInput, 'input-error');
        return;
    }

    if (amount === "" || amount <= 0) {
        const statusAmount = document.getElementById("status-amount");
        statusAmount.innerText = "Please enter a valid expense amount!";
        setTimeout(() => statusAmount.innerText = "", 3000);
        highlightInput(amountInput, 'input-error');
        return;
    }

    showToast("Expense "+ name +" added successfully!");
    setTimeout(() => {
        nameInput.value = "";
        amountInput.value = "";
        }, 500);

    highlightInput(nameInput, 'input-success');
    highlightInput(amountInput, 'input-success');

    addExpense(name, amount, category);
    renderExpenses();
    showTotal();
});

categories('category');
deleteExpense();
showExpense();
editExpense();
closeModal();