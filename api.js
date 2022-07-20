const arr=[
    {id:0,name:'aman',desig:'software',salary:'10000'},
    {id:1,name:'gaurav',desig:'data-scientist',salary:'1000'},
];

function getData(){
    console.log('Data Fetching....');
    let myPromise=new Promise(function(resolve,reject){
        setTimeout(()=>{
              resolve();
        },1000);
    }); 
    console.log('Data is fetched...');
    return myPromise;
   
}

function insertData(obj){
    console.log('Data is inserting....');
    let myPromise=new Promise(function(res,rej){
      setTimeout(()=>{
        obj.id=arr.length;
        arr.push(obj);
        res(); 
      },1000)
    })
    console.log('Data is inserted...');
    return myPromise;   
}

function deleteEmployee(index){
    console.log('deleting......');
    let myPromise=new Promise(function(res,rej){
       setTimeout(()=>{
        arr.splice(index,1);
        res();
       },1000);
    });
    console.log('Data is Deleted....');
    return myPromise;    
}

function updateEmployee(index,name,desig,salary){
    console.log('updating.....');
    
    let myPromise=new Promise(function(res,rej){
        setTimeout(()=>{
            arr[index]['name']=name;
            arr[index]['desig']=desig;
            arr[index]['salary']=salary;
            res();
           },1000);
    });
    console.log('updated sucessfully');
    return myPromise;
}