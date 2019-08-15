let matrik =[[1,2,3],[4,5,6],[7,8,9]];
let newMatrik=[];
function transpose(){
    for (let i=0;i<matrik.length;i++){
        newMatrik[i]=[];
        for(let j=0;j<matrik[i].length;j++){
           newMatrik[i][j]=matrik[j][i];
        } 
    } return newMatrik;
};

    
    
// }
 console.log(transpose());
