function even(batas) {
    var fib = []; 
    var gnps= [];
    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i <= 50; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
      if(fib[i]>batas){
        fib[i]=0;
        break;
      }
      if(fib[i]%2==0){
        gnps.push(fib[i]);
      }
      }
    var evenSum= gnps.reduce((a, b) => a + b, 0);
    return evenSum;
  }
  
  function odd(batas) {
    var fib = []; 
    var gjls= [];
    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i <= 50; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
      if(fib[i]>batas){
        fib[i]=0;
        break;
      }
      if(fib[i]%2==1){
        gjls.push(fib[i]);
      }
      }
    var oddSum= gjls.reduce((a, b) => a + b, 0)
    return oddSum;
  }
  
console.log(even(100));
 console.log(odd(100));