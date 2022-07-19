
const table=document.getElementById('myTable');
let btn=document.getElementById('btn');
let name=document.getElementById('name');
let desig=document.getElementById('desig');
let salary=document.getElementById('salary');
let myIndex=0;
function Load(){
    getData(insertDataTable);
};

function addData(){
  let Name=name.value;
  let Desig=desig.value;
  let Salary=salary.value;
    let obj={
      name:Name,
      desig:Desig,
      salary:Salary,
      }
      insertData(obj);
}

function insertDataTable(){
  console.log('arrr size is',arr.length);
  arr.forEach((value)=>{
    let tableRow=document.createElement('tr');
    tableRow.innerHTML=(
      `<tr>
       <td>${value.name}</td>
       <td>${value.desig}</td>
       <td>${value.salary}</td>
       <td><div class="between">
       <button type="button" onclick="updateData(${value.id})">Edit</button>
       <button type="button" onclick="deleteData(${value.id})">Delete</button>
     </div></td>
      </tr>`
    )
    table.appendChild(tableRow);
  });      
}

function updateData(e){
  // btn.innerHTML='Update';
  // myIndex = ev.target.parentNode.parentNode.parentNode.rowIndex-2;
  // let row=table.rows[myIndex];
  // name.value=row.cells[0].innerHTML;  desig.value=row.cells[1].innerHTML; salary.value=row.cells[0].innerHTML;

  // console.log(row.cells[0].innerHTML);

  console.log('update is called',e);
  
}

function deleteData(e){
  // console.log('delete is called');
  // let index=ev.target.parentNode.parentNode.parentNode.rowIndex-2;
  // table.deleteRow(index);
  console.log(e);
  deleteEmployee(e);
}