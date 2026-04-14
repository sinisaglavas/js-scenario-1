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
        category: category,
    };
}

export function getExpenses() {
    return expenses;
}

export function renderExpenses() {
    const expensesDiv = document.getElementById('expenses-div');
    expensesDiv.innerHTML = '';

    for (let i = 0; i < expenses.length; i++) {
        const newExpenseDiv = document.createElement("div");
        newExpenseDiv.id = 'new-expense';

        const amountDiv = document.createElement("div");
        amountDiv.id = 'amount-bar';

        const categorySpan = document.createElement("span");
        categorySpan.classList.add('category-badge');
        if (expenses[i].category === 'Health') {
            categorySpan.classList.add('health');
        }

        categorySpan.innerText = expenses[i].category;

        const amountSpan = document.createElement("span");
        amountSpan.innerText = expenses[i].name + ': ' + expenses[i].amount;

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

export function deleteExpense() {
    document.getElementById('expenses-div').addEventListener('click', (e) => {

        if (e.target.classList.contains('delete-btn')) {

            const index = e.target.dataset.index;

            if (index !== undefined) {
                expenses.splice(Number(index), 1);
                localStorage.setItem('expenses', JSON.stringify(expenses));
                renderExpenses();
                showTotal();
            }
        }
    });
}

function getTotal() {
    let total = 0;

    for (let e of expenses) {
        total += Number(e.amount);
    }

    return total;
}

export function showTotal() {
    document.getElementById("total").innerText = getTotal();
}

export function highlightInput(element, className) {
    element.classList.add(className);
    setTimeout(() => {
        element.classList.remove(className);
    }, 800);
}