function insertStudent() {
    //Creating new values and assign the values
    let nameVal = document.querySelector("#name").value;
    let surnameVal = document.querySelector("#surname").value;
    let dateofbirthVal = document.querySelector("#dateofbirth").value;
    let educationVal = document.querySelector("#education").value;
    let professionVal = document.querySelector("#professional").value;
    let invprojectVal = document.querySelector("#ınvolvedproject").value;

    //Creationg object
    let obj = {
        "name": nameVal,
        "surname": surnameVal,
        "dateofbirth": dateofbirthVal,
        "education": educationVal,
        "professional": professionVal,
        "ınvolvedproject": invprojectVal
    };

    //Adding the obj to the table
    addToTable(obj);
}

function addToTable(studentObj) {
    let table = document.querySelector("#studenttable");
    //Creating element for the table
    let row = document.createElement("tr");
    let nameTD = document.createElement("td");
    let surnameTD = document.createElement("td");
    let dateofbirthTD = document.createElement("td");
    let educationTD = document.createElement("td");
    let professionalTD = document.createElement("td");
    let invprojectTD = document.createElement("td");

    //Filling their text with the textareas's text
    nameTD.innerText = studentObj["name"];
    surnameTD.innerText = studentObj["surname"];
    dateofbirthTD.innerText = studentObj["dateofbirth"];
    educationTD.innerText = studentObj["education"];
    professionalTD.innerText = studentObj["professional"];
    invprojectTD.innerText = studentObj["ınvolvedproject"];

    //Adding them to the row
    row.appendChild(nameTD);
    row.appendChild(surnameTD);
    row.appendChild(dateofbirthTD);
    row.appendChild(educationTD);
    row.appendChild(professionalTD);
    row.appendChild(invprojectTD);


    //Adding the row to the table
    table.appendChild(row);
}
//Adding the STUDENTS value's information to the table
function refreshTable() {
    STUDENDTS.forEach((studentObj) => {
        addToTable(studentObj);
    })

}
//Creating function to the last part of the website (sends an alert message to the user)
function sendbtnclicked(){
    alert("Your message sent ! ")
}
//Adding the buttons onclick functions.
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#insertbtn").onclick = function () {
        insertStudent();
    }

    document.querySelector("#refreshtable").onclick = function () {
        refreshTable();
    }

    document.querySelector("#sendbtn").onclick =function () {
        sendbtnclicked();
    }
})
