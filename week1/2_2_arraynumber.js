// function jumlahSatu(num){
//     numSplit = []; //numInt = [];
//     // numSplit= [...num+''].map(n=>+n);
//     numSplit =num.map(String);
//  //   numInt = numSplit.parseInt(Text, 10);
// };

// console.log(jumlahSatu([123,9,27]));


// //kurang array split

// function jumlahSatu(num){
//     numSplit = []; newNum=[];
//     numSplit =num.toString(10).split('');
//     console.log(numSplit);
    
//     var newArr = numSplit.join(',').replace(/,/g, '').split();
//     return newArr;	
// };

function jumlahSatu(num){
   
    newNum = num.reduce((a,b)=>a+b);
    let arr=newNum;
    
    while (newNum >=10){
        console.log(arr);
        arr = Array.from(String(newNum), Number);
        console.log(arr);
        newNum = arr.reduce((a,b)=>a+b);
        arr=newNum;
    }console.log('Hasil Akhir = ' ); return arr;
    
}
console.log(jumlahSatu([123,9,27]));

