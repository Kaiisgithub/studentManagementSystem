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

function deleteRowForTableNameAndSection(e)
{
    console.log("Delete button clicked");

    let btn = e.target;

    if(btn.classList.contains("deleteBtn"))
    {
        let index = btn.dataset.index;
        if(confirm("Are you sure you want to delete this data for " + student[index].name))
        {
            student.splice(index, 1); 
            renderTableNameAndSection();
        }
        else
        {
            alert("Action has been cancelled !");
            console.log("Edit cancel");
        }
        
    }
}

function renderTableNameAndSection()
{
    console.log("Rendering Table");

    const newRow = student.map((student,index) => `
                                <tr>
                                     <td>${student.name}</td>
                                     <td>${student.section}</td>
                                     <td>
                                        <button class="editBtn" data-index = "${index}">Edit</button>
                                        <button class="deleteBtn" data-index = "${index}">Delete</button>
                                     </td>
                                </tr>
                                `).join("");
    nameAndSectionTableBodyEL.innerHTML = newRow;
}
nameAndSectionFormEL.addEventListener('submit', addStudentandSection);
nameAndSectionTableEL.addEventListener('click', editRowForTableNameAndSection);
nameAndSectionTableEL.addEventListener('click', deleteRowForTableNameAndSection);