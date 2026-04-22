let expenses = [];

export function addExpense(name, amount, category) {
    expenses.push({
        name: name,
        amount: amount,
        category: category || 'Others',
    });

    localStorage.setItem('expenses', JSON.stringify(expenses));
}

export function updateExpense(index, name, amount, category) {
    expenses[index] = {
        name: name,
        amount: amount,
        category: category || 'Others',
    };
}

export function getExpenses() {
    return expenses;
}

export function renderExpenses(data) {
    const expensesDiv = document.getElementById('expenses-div');
    expensesDiv.innerHTML = '';

    for (let i = 0; i < data.length; i++) {
        const newExpenseDiv = document.createElement("div");
        newExpenseDiv.id = 'new-expense';

        const amountDiv = document.createElement("div");
        amountDiv.id = 'amount-bar';

        const categorySpan = document.createElement("span");
        categorySpan.classList.add('category-badge');
        if (data[i].category === 'Health') {
            categorySpan.classList.add('health');
        }

        categorySpan.innerText = data[i].category;

        const amountSpan = document.createElement("span");
        amountSpan.innerText = data[i].name + ': ' + formatCurrency(data[i].amount);

        amountDiv.append(categorySpan, amountSpan);

        const actionDiv = document.createElement("div");
        actionDiv.id = 'action-bar';

        const editSpan = document.createElement("span");
        editSpan.className = 'edit-btn';
        editSpan.dataset.index = i;
        editSpan.innerText = 'Edit';

        const deleteSpan = document.createElement("span");
        deleteSpan.className = 'delete-btn';
        deleteSpan.dataset.index = i;
        deleteSpan.innerText = 'X';

        actionDiv.append(editSpan, deleteSpan);
        newExpenseDiv.append(amountDiv, actionDiv);
        expensesDiv.append(newExpenseDiv);
    }
}

export function noResultFound() {
    const expensesDiv = document.getElementById('expenses-div');
    expensesDiv.innerHTML = '<p>No results found</p>';
}

export function deleteExpense() {
    document.getElementById('expenses-div').addEventListener('click', (e) => {

        if (e.target.classList.contains('delete-btn')) {

            const index = e.target.dataset.index;

            if (index !== undefined) {
                expenses.splice(Number(index), 1);
                localStorage.setItem('expenses', JSON.stringify(expenses));
                renderExpenses(getExpenses());
                showTotal(getTotal(expenses));
            }
        }
    });
}

export function formatCurrency(value) {
    return Number(value).toLocaleString('en-US') + ' rsd';
}

export function getTotal(expensesArray = []) {
    let total = 0;

    for (let e of expensesArray) {
        total += Number(e.amount || 0);
    }

    return total;
}

export function showTotal(amount) {
    document.getElementById("total").innerText = formatCurrency(amount);
}

export function highlightInput(element, className) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, 800);
}