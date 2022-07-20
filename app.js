
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
  // let tableRow=document.createElement('tr');
  let data='';
  arr.forEach((value)=>{
    data+= `<tr>
       <td>${value.name}</td>
       <td>${value.desig}</td>
       <td>${value.salary}</td>
       <td><div class="between">
       <button type="button" onclick="updateData(${value.id})">Edit</button>
       <button type="button" onclick="deleteData(${value.id})">Delete</button>
     </div></td>
      </tr>`
      }); 
      table.innerHTML = data;
     
}

function updateData(e){
 

  console.log('update is called',e);
  
}

function deleteData(e){

  console.log(e);
  deleteEmployee(e);
}