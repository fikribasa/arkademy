let matrikArray = [[1,2,3],[4,5,6],[7,8,9]];

function transpose(){
    var trans =[];
    for (let i=0;i<matrikArray.length;i++){
        for (let j=0; j<matrikArray[i].length;j++){
            if (matrikArray[i][j]=== undefined) continue;
            if (trans[j]=== undefined) trans[j]=[];
            trans[j][i]=matrikArray[i][j];
        }
    }
    return trans;
}

// let matrik =[[1,2,3],[4,5,6],[7,8,9]];
// let newMatrik=[];
// function transpose(){
//     for (let i=0;i<matrik.length;i++){
//         newMatrik[i]=[];
//         for(let j=0;j<matrik[i].length;j++){
//            newMatrik[i][j]=matrik[j][i];
//         } 
//     } return newMatrik;
// };

    
    
// }
 console.log(transpose());
