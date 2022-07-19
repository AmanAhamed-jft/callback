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
        obj.id=arr.length-1;
        arr.push(obj);
        console.log(obj);
        console.log('Data is inserted...');
    },2000)
}

function deleteEmployee(index){
    console.log('deleting......');
    setTimeout(()=>{
      for(let i=0;i<arr.length;i++){
        if(arr[i].id===index){
            delete arr[i];
            break;
        }
      } 
      console.log('delete is done');   

    },2000);
}