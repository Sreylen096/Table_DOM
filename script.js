let selectedRow = null;
function validation() {
    let name = document.getElementById('fullName');
    let check = true;
    if (name.value == '') {
        document.getElementById('fullNameValidationError').classList.remove('hide');
        check = false;
    }
    else {
        document.getElementById('fullNameValidationError').classList.add('hide');
    }
    return check;
}

function insertValue() {
    let name = document.getElementById('fullName');
    let email = document.getElementById('email');
    let salary = document.getElementById('salary');
    let city = document.getElementById('city');

    let tbody = document.getElementById('tbody');
    let tr = tbody.insertRow(0);
    let td1 = tr.insertCell(0);
    let td2 = tr.insertCell(1);
    let td3 = tr.insertCell(2);
    let td4 = tr.insertCell(3);
    let action = tr.insertCell(4);

    td1.innerHTML = name.value;
    td2.innerHTML = email.value;
    td3.innerHTML = salary.value;
    td4.innerHTML = city.value;
    action.innerHTML = '<a onclick="editValue(this)">Edit</a><a onclick="deleteValue(this)">Delete</a>';
    clearInput();

}
function clearInput() {
    document.getElementById('fullName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('city').value = '';
}

function editValue(tr) {
    selectedRow = tr.parentElement.parentElement;
    let name = document.getElementById('fullName');
    let email = document.getElementById('email');
    let salary = document.getElementById('salary');
    let city = document.getElementById('city');

    let nameInput = selectedRow.cells[0];
    let emailInput = selectedRow.cells[1];
    let salaryInput = selectedRow.cells[2];
    let cityInput = selectedRow.cells[3];


    name.value = nameInput.innerHTML;
    email.value = emailInput.innerHTML;
    salary.value = salaryInput.innerHTML;
    city.value = cityInput.innerHTML;

}

function updateValue() {
    let name = document.getElementById('fullName');
    let email = document.getElementById('email');
    let salary = document.getElementById('salary');
    let city = document.getElementById('city');

    selectedRow.cells[0].innerHTML = name.value;
    selectedRow.cells[1].innerHTML = email.value;
    selectedRow.cells[2].innerHTML = salary.value;
    selectedRow.cells[3].innerHTML = city.value

    selectedRow = null;

}

function deleteValue(tr) {
    let row = tr.parentElement.parentElement;
    row.parentElement.removeChild(row);
}

function btn() {
    if (validation()) {

        if (selectedRow == null) {
            insertValue();
        }
        else {
            updateValue();
        }
        clearInput();

    }

}