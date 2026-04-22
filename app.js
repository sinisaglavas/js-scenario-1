import {
    addExpense,
    renderExpenses,
    showTotal,
    highlightInput,
    deleteExpense,
    getExpenses,
    getTotal,
    noResultFound
} from "./src/functions.js";
import {showToast} from "./src/toastMessage.js";
import {closeModal, editExpense, showExpense} from "./src/modal.js";
import {categories} from "./src/ui.js";

const historyDate = document.getElementById('history-date');
historyDate.innerText = 'History (' + new Date().toLocaleDateString() + ')';

const nameInput = document.getElementById('name');
const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('addBtn');
const searchForm = document.getElementById('search-form');
const resetSearch = document.getElementById('reset-search');
const sortByName = document.getElementById('sort-by-name');
const sortByAmount = document.getElementById('sort-by-amount');

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
    renderExpenses(getExpenses());
    showTotal(getTotal(getExpenses()));
});

const searchName = document.getElementById('search-name');
const searchCategory = document.getElementById('search-category');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = searchName.value.trim();
    let category = searchCategory.value;

    if (! name && category === 'undefined') {
        showToast("Please enter a search value or category!");
        highlightInput(searchName, 'input-error');
        highlightInput(searchCategory, 'input-error');
        return;
    }

    const storedData = localStorage.getItem('expenses');
    const items = storedData ? JSON.parse(storedData) : [];
    const searchResults = [];

    for (let item of items) {
        if (item.name === name && (item.category === category || item.category === 'Others')) {
            searchResults.push(item);
            renderExpenses(searchResults);
            showTotal(searchResults.reduce((total, item) => total + Number(item.amount), 0));
        }

        if (item.name === name && category === 'undefined'){
            searchResults.push(item);
            renderExpenses(searchResults);
            showTotal(searchResults.reduce((total, item) => total + Number(item.amount), 0));
        }

        if (item.category === category && name === '') {
            searchResults.push(item);
            renderExpenses(searchResults);
            showTotal(searchResults.reduce((total, item) => total + Number(item.amount), 0));
        }

        if (searchResults.length === 0) {
            noResultFound();
            showTotal(getTotal());
        }
    }
});

resetSearch.addEventListener('click', () => {
    searchForm.reset();
    renderExpenses(getExpenses());
    showTotal(getTotal(getExpenses()));
});

sortByName.addEventListener('click', () => {
    const sortedExpenses = getExpenses().sort((a, b) => a.name.localeCompare(b.name));
    renderExpenses(sortedExpenses);
    showTotal(getTotal(sortedExpenses));
});

sortByAmount.addEventListener('click', () => {
    const sortedExpenses = getExpenses().sort((a, b) => Number(a.amount) - Number(b.amount));
    renderExpenses(sortedExpenses);
    showTotal(getTotal(sortedExpenses));
})

categories('search-category');
categories('category');
deleteExpense();
showExpense();
editExpense();
closeModal();