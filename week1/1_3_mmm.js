function average(arrayNilai) {
    return arrayNilai.reduce((a,b) => a+b) / arrayNilai.length;
}
function mean (arrayNilai){
    let a=Math.round(arrayNilai.length/2);
    let newArray= arrayNilai.sort((a,b) => a-b);
    console.log(newArray);
    return newArray=(newArray[a-1]+newArray[a])/2;
}
function modus (arrayNilai){
    let mod=[], count=[],i,maxindex=0, number;

    for (i=0;i<arrayNilai.length; i+=1) {
        number=arrayNilai[i];
        count[number]=(count[number] || 0) +1;
        if (count[number] > maxindex){
            maxindex=count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxindex) {
                mod.push(Number(i));
            }
        }
    return mod;
}
console.log(modus([13,5,7,4,6,8,11,5,8,8]));



// let hasil= 0;
// function average(data){
//     for (let i=0;i<data.length;i++){ 
//         hasil += data[i];
        
//     } return hasil/data.length;
// }

// function median(data){
//     let medIndx=data.length/2;
//     // let newData = data.sort((a,b) => a-b)
//     // console.log(newData);
//     if (data.length % 2 == 1){
//         hasil = data[(data.length - 1)/2];
//     } 
//     else {
//         hasil = (data[medIndx-1] + data[medIndx])/2;
//     } 
//     return hasil;
// }

// function modus (data) {
    
// }
// console.log(median([10,3,5,7,3,5,7,4,2,1]));