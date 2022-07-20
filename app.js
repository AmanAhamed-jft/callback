
const table=document.getElementById('myTable');
let btn=document.getElementById('btn');
let name=document.getElementById('name');
let desig=document.getElementById('desig');
let salary=document.getElementById('salary');
let myIndex=0;
let lastIndexClick = -1;
function Load(){
    getData().then(insertDataTable).catch(console.log('error in loading'));
}

(function init(){
  Load();
})();

function addData(e){
  let Name=name.value;
  let Desig=desig.value;
  let Salary=salary.value;
    let obj={
      name:Name,
      desig:Desig,
      salary:Salary,
      }
      if(btn.innerText=='Add')
        insertData(obj).then(Load).catch(console.log('error in inserting'));
      else{
        updateEmployee(lastIndexClick,Name,Desig,Salary).then(Load).catch(console.log('error in updating..'));
        btn.innerHTML='Add';
      };
      
      name.value='';   desig.value='';  salary.value='';
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
  console.log("update data==", e)
 btn.innerText='Update';
  name.value=arr[e].name;
  desig.value=arr[e].desig;
  salary.value=arr[e].salary;

  let n = arr[e].name
  let d = arr[e].desig
  let s = arr[e].salary

  console.log('updateData',e,n,d,s)
  lastIndexClick = e;
}

function deleteData(e){
   deleteEmployee(e).then(Load).catch(console.log('error in deleting'));
}