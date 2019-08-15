// let arrayObject = [
//     {
//         name:'Tatas',
//         company : 'Arkademy',
//         job:'Trainer',
//         status:'Single',
//         city:'Jogja'
//     },
//     {
//         name:'Pratama',
//         company:'Emago',
//         job:'Trainer',
//         status:'Single',
//         city: 'Jakarta'
//     }
// ];

// function editArray(){
//     let pushArray = [...arrayObject];
//     pushArray.find(a => a.name=='Tatas').status='Married';
//     pushArray.find(a => a.name=='Tatas').city='Jakarta';
// for (var i =0; i<arrayObject.length; i++) {
//     if (pushArray[i].name==='Pratama') {
//         pushArray[i].company='Arkademy'
//         pushArray[i].city='Yogyakarta'
//     }
//     }    
    
//     return pushArray;

// }
// console.log(editArray());


let arrayObjek =[
    {name:'Tatas',company:'Arkademy',job:'Trainer',status:'single',city:'Jogja' },
    {name:'Pratama',company:'Emago',job:'Trainer',status:'single',city:'Jakarta'}
];

function editObjek(){
    for(let i=0;i<arrayObjek.length;i++){
        if(arrayObjek[i].name==='Tatas'){
            arrayObjek[i].city='Jakarta';
            arrayObjek[i].status='Menikah';
        } else if(arrayObjek[i].name==='Pratama'){
            arrayObjek[i].company='Arkademy';
            arrayObjek[i].city='Jogja';
        }
    } return arrayObjek;
}

console.log(editObjek())

//kurang spread operator