let nameAndSectionTableEL = document.getElementById("nameAndSectionTable");
let nameAndSectionTableBodyEL = document.getElementById("nameAndSectionTableBody");
let nameAndSectionFormEL = document.getElementById("nameAndSectionForm");
let nameInputEL = document.getElementById("nameInput");
let sectionInputEL = document.getElementById("sectionInput");

let student = [];

function addStudentandSection(event)
{
    console.log("Name and Section Submitted.");

    event.preventDefault();
    student.push({name : nameInputEL.value, section : sectionInputEL.value});
    nameAndSectionFormEL.reset();
    
    renderTableNameAndSection();
}  

function renderTableNameAndSection()
{
    console.log("Rendering Table");

    const newRow = student.map((student,index) => `
                                <tr>
                                     <td>${student.name}</td>
                                     <td>${student.section}</td>
                                     <td><button id = "editBtn" class="editBtn" data-index = "${index}">
                                     Edit</button></td>
                                </tr>
                                `).join("");
    nameAndSectionTableBodyEL.innerHTML = newRow;
}

function editRowForTableNameAndSection(e)
{
    console.log("Edit button clicked");

    let btn = e.target;

    if(btn.classList.contains("editBtn"))
    {
        let index = btn.dataset.index;

        const newName = prompt("Edit Name: " + student[index].name);
        const newSection = prompt("Edit Section: " + student[index].section);

        if(newName !== null)
        {
            student[index].name = newName;
        }

        if(newSection !== null)
        {
            student[index].section = newSection;
        }
        
        renderTableNameAndSection();
    }

    
}

nameAndSectionFormEL.addEventListener('submit', addStudentandSection);
nameAndSectionTableEL.addEventListener('click', editRowForTableNameAndSection);