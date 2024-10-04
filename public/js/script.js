// custom functions

function getInputValueById(id) {
  return parseFloat(document.querySelector(id).value);
}
function showError(id) {
  return document.querySelector(id).classList.remove("hidden");
}

function getCustomElementById(id) {
  return document.querySelector(id);
}

let count = 0;
// add addEventListener() for calculate button

document.querySelector("#calculate").addEventListener("click", function () {
  count += 1;
  // get the variables
  const income = getInputValueById("#income");
  const softwareExpense = getInputValueById("#software");
  const coursesExpense = getInputValueById("#courses");
  const internetExpense = getInputValueById("#internet");

  // Validation for negative value or any kind of input that is not a number
  if (income <= 0 || isNaN(income)) {
    showError("#income-error");
    return;
  }
  if (softwareExpense <= 0 || isNaN(softwareExpense)) {
    showError("#software-error");
    return;
  }
  if (coursesExpense <= 0 || isNaN(coursesExpense)) {
    showError("#courses-error");
    return;
  }
  if (internetExpense <= 0 || isNaN(internetExpense)) {
    showError("#internet-error");
    return;
  }

  // value calculation & show in ui
  const totalExpenses = softwareExpense + coursesExpense + internetExpense;
  const balance = income - totalExpenses;

  // validate total expenses can not be more than income
  if (totalExpenses > income) {
    showError("#logic-error");
    return;
  }

  const totalExpenseElement = getCustomElementById("#total-expense");
  totalExpenseElement.innerText = totalExpenses;

  const balanceElement = getCustomElementById("#balance");
  balanceElement.innerText = balance.toFixed(2);

  const results = getCustomElementById("#results");
  results.classList.remove("hidden");

  // dynamically add new element inside history section

  const historyItem = document.createElement("div");

  historyItem.className =
    "col-span-6 bg-white p-3 rounded-md shadow-sm border-l-2 border-purple-500";

  historyItem.innerHTML = `
     <p class="text-xs text-gray-500">Serial: ${count}</p>
     <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
     <p class="text-xs text-gray-500">Income: $${income.toFixed(2)}</p>
     <p class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
     <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
      `;

  const historyContainer = getCustomElementById("#history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});

// add addEventListener() for calculate savings button
document
  .querySelector("#calculate-savings")
  .addEventListener("click", function () {
    // get variables
    const income = getInputValueById("#income");
    const softwareExpense = getInputValueById("#software");
    const coursesExpense = getInputValueById("#courses");
    const internetExpense = getInputValueById("#internet");
    const savingsPercentage = getInputValueById("#savings");

    // value calculation & show in ui
    const totalExpenses = softwareExpense + coursesExpense + internetExpense;
    const balance = income - totalExpenses;

    // calculate savings
    const savings = (balance * savingsPercentage) / 100;
    const savingsElement = getCustomElementById("#savings-amount");
    savingsElement.innerText = savings;

    // calculate remaining balance
    const remainingBalance = balance - savings;

    // Validation for negative value or any kind of input that is not a number
    if (savings <= 0 || isNaN(savings)) {
      showError("#savings-error");
      return;
    }

    const remainingBalanceElement = getCustomElementById("#remaining-balance");
    remainingBalanceElement.innerText = remainingBalance;
  });

const assistantTab = getCustomElementById("#assistant-tab");
const historyTab = getCustomElementById("#history-tab");

// add addEventListener() for history tab button
assistantTab.addEventListener("click", function () {
  // add classes to assistant tab
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-600",
    "to-purple-600"
  );
  // remove classes from assistant tab
  assistantTab.classList.remove("text-gray-600");
  // remove classes from history tab
  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-600",
    "to-purple-600"
  );
  // add classes to history tab
  historyTab.classList.add("text-gray-600");

  // show input calculation form
  const showExpenseForm = getCustomElementById("#expense");
  showExpenseForm.classList.remove("hidden");

  // hide history section in history tab
  const historySection = getCustomElementById("#history-section");
  historySection.classList.add("hidden");
});

// add addEventListener() for history tab button
historyTab.addEventListener("click", function () {
  // add classes to history tab
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-600",
    "to-purple-600"
  );
  // remove classes from history tab
  historyTab.classList.remove("text-gray-600");
  // remove classes from assistant tab
  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-600",
    "to-purple-600"
  );
  // add classes to assistant tab
  assistantTab.classList.add("text-gray-600");

  // hide input calculation form
  const hideExpenseForm = getCustomElementById("#expense");
  hideExpenseForm.classList.add("hidden");

  // show history section in history tab
  const historySection = getCustomElementById("#history-section");
  historySection.classList.remove("hidden");
});

// Live Validation for input

document.querySelector("#income").addEventListener("input", function () {
  const inputValue = getInputValueById("#income");
  if (isNaN(inputValue) || inputValue <= 0) {
    showError("#income-error");
    return;
  }
});
document.querySelector("#software").addEventListener("input", function () {
  const inputValue = getInputValueById("#software");
  if (isNaN(inputValue) || inputValue <= 0) {
    showError("#software-error");
    return;
  }
});
document.querySelector("#courses").addEventListener("input", function () {
  const inputValue = getInputValueById("#courses");
  if (isNaN(inputValue) || inputValue <= 0) {
    showError("#courses-error");
    return;
  }
});
document.querySelector("#internet").addEventListener("input", function () {
  const inputValue = getInputValueById("#internet");
  if (isNaN(inputValue) || inputValue <= 0) {
    showError("#internet-error");
    return;
  }
});
document.querySelector("#savings").addEventListener("input", function () {
  const inputValue = getInputValueById("#savings");
  if (isNaN(inputValue) || inputValue <= 0) {
    showError("#savings-error");
    return;
  }
});
