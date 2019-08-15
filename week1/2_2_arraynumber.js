function jumlahSatu(num){
   
    newNum = num.reduce((a,b)=>a+b);
    let arr=newNum;
    
    while (newNum >=9){
        console.log(arr);
        arr = [Array.from(String(newNum), Number)];
        console.log(arr);
        newNum = arr.reduce((a,b)=>a+b);
        arr=newNum;
    }console.log('Hasil Akhir = ' ); return arr;
    
}
console.log(jumlahSatu([123,9,27]));

