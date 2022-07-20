const arr=[
    {id:0,name:'aman',desig:'software',salary:'10000'},
    {id:1,name:'gaurav',desig:'data-scientist',salary:'1000'},
];

function getData(callBack){
    console.log('Data Fetching....');
    setTimeout(()=>{
        callBack();
        console.log('Data Fetched...');
        
    },2000)
}

function insertData(obj){
    console.log('Data is inserting....');
    setTimeout(()=>{
        obj.id=arr.length;
        arr.push(obj);
        console.log(obj);
        console.log('Data is inserted...');
    
    },2000);

}

function deleteEmployee(index){
    console.log('deleting......');
    setTimeout(()=>{
      arr.splice(index,1);
     
    },2000)
    console.log('delete is done');
    
}

function updateEmployee(index,name,desig,salary){
    console.log('updating.....');
    console.log('Update Employee',index,name,desig,salary);
    console.log(arr);
    setTimeout(()=>{
              arr[index]['name']=name;
              arr[index]['desig']=desig;
              arr[index]['salary']=salary;
             btn.innerHTML='Add';
             
             
    },2000);
    
    console.log('updated sucessfully');
}