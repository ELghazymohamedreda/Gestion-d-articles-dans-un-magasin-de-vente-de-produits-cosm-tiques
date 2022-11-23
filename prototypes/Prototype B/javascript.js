var selectedRow = null
document.getElementById("formSubmit").addEventListener("submit", function (event) {
event.preventDefault();
    if (validate()) {
        var work = readwork();
        if (selectedRow == null){
            insertNewRow(work); 
        }
        else
            editRow(work)
        resetForm();
    } 
   
})

function resetForm() {
    document.getElementById("inputNom").value = "";
    document.getElementById("inputMarque").value = "";
    document.getElementById("inputPrix").value = "";
    document.getElementById("inputDate").value = "";
    document.getElementById("inputType").value = "";
    document.querySelector('input[name="Promotion"]:checked').checked = false
    selectedRow = null;
}

var onEditButton = document.getElemen

function readwork() {

    var work = {};
    work.nom = document.getElementById("inputNom").value;
    work["marque"] = document.getElementById("inputMarque").value;
    work["prix"] = parseFloat(document.getElementById("inputPrix").value);
    work["date"] = document.getElementById("inputDate").value;
    work["type"] = document.getElementById("inputType").value;
    work["promotion"] = document.querySelector('input[name="Promotion"]:checked').value;
    return work;
}



function insertNewRow(work) {
    var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = work.nom;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = work.marque;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = work.prix;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = work.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = work.type
    cell6 = newRow.insertCell(5)
    cell6.innerHTML = work.promotion
    cell7 = newRow.insertCell(6)

    var editButton = document.createElement("button")
    var deleteButton = document.createElement("button")

    var editContent = document.createTextNode("Edit")
    editButton.appendChild(editContent)
    editButton.className = "btn btn-info me-1"
    editButton.setAttribute('onclick', 'onEdit(this)')

    var deleteContent = document.createTextNode('Delete')
    deleteButton.appendChild(deleteContent)
    deleteButton.className = "btn btn-danger"
    deleteButton.setAttribute("onclick", 'onDelete(this)')

    cell7.appendChild(editButton)
    cell7.appendChild(deleteButton)
    

}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("inputNom").value = selectedRow.cells[0].innerHTML;
    document.getElementById("inputMarque").value = selectedRow.cells[1].innerHTML;
    document.getElementById("inputPrix").value = selectedRow.cells[2].innerHTML;
    document.getElementById("inputDate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("inputType").value = selectedRow.cells[4].innerHTML;

    var checkValue = document.getElementsByName("workType");
    for (var i = 0; i < checkValue.length; i++) {
        if (checkValue[i].value == selectedRow.cells[5].innerHTML) {
            checkValue[i].checked = true
        }
    }show();
}

function editRow(workToEdit) {
    selectedRow.cells[0].innerHTML = workToEdit.nom;
    selectedRow.cells[1].innerHTML = workToEdit.marque;
    selectedRow.cells[2].innerHTML = workToEdit.prix;
    selectedRow.cells[3].innerHTML = workToEdit.date;
    selectedRow.cells[4].innerHTML = workToEdit.type;
    selectedRow.cells[5].innerHTML = workToEdit.promotion;

}

function onDelete(td) {
     
        row = td.parentElement.parentElement;
        document.getElementById("worksTable").deleteRow(row.rowIndex)
    
}


function validate() {
    var isValid = true;
    if (document.getElementById("inputNom").value == "") {
        isValid = false;
    }
    if (document.getElementById("inputMarque").value == "") {
        isValid = false;
    } 
    if (document.getElementById("inputPrix").value == "") {
        isValid = false;
    } 
    if (document.getElementById("inputDate").value == "") {
        isValid = false;
    } 
    if (document.getElementById("inputType").value == "") {
        isValid = false;
    } 
    if (document.querySelector('input[name="Promotion"]').value == null) {
        isValid = false;
    }  
    return isValid;
}

function show(){
        document.querySelector("#formSubmit").style.display="flex";
    }