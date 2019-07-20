function whyBrulee(ops,mx,arr){
    var numberString="";
    var numArr= [];
    for(var i=0;i<=mx;i++){
        numberString+=i.toString();
    }
    for(var i=0;i<arr.length;i++){
      numArr[i]= parseInt(numberString[arr[i]]);
    }
    var numDisplay=0;
    if(ops=="SUM"){
      numDisplay= numArr.reduce((a, b) => a + b, 0);
    }
    else if(ops=="MUL"){
      numDisplay= numArr.reduce((a, b) => a * b, 1);
    }
    else if(ops=="SUB"){
      numDisplay= numArr.reduce((a, b) => a - b, numArr[0]*2);
    }
    else if(ops=="DIV"){
      numDisplay= numArr.reduce((a, b) => a / b, numArr[0]*numArr[0]);
    }
    return numDisplay;
  }
  
  console.log(whyBrulee("SUM",20,[11,13,15]));
  console.log(whyBrulee("MUL",20,[12,15,17]));