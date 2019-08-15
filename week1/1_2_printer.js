let huruf =['merah','biru','hijau','ungu','kuning'];
let perintah= [true, false,true,false,true];
let output=[];
function printer(command){
    for(let i=0; i<huruf.length;i++){
        if(perintah[i]===command){
            output.push(huruf[i]);
        }
    }return output;
};

console.log(printer(true));