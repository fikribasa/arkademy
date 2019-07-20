function arkaFood(jumlah,kode,jarak,pajak){
    var kode1="ARKAFOOD5";
    var kode2= "DITRAKTIRDEMY";
    var diskon=0;

    //kode Diskon
  if(kode==kode1){
    if(jumlah>=50000){
      var kurangi= (jumlah/100)*50;
      if(kurangi<50000){
        diskon=kurangi;
      }
      else{diskon=0;}
    }
  }
    else if(kode==kode2){
    if(jumlah>=25000){
      var kurangi= (jumlah/100)*60;
      if(kurangi<30000){
        diskon=kurangi;
      }
      else{diskon=0;}
    }
  }

  //ongkir
var ongkir=0;
if(jarak<=1.5){
  ongkir= 5000;
}
else if(jarak>1.5){
    var newDist= Math.ceil(jarak-1.5);
  ongkir= 5000 + newDist*3000;
}
//Coding pajak
var ppn=0;
if(pajak=="true"){
 ppn= (jumlah/100)*5;
}
var total= (jumlah-diskon)+ongkir+ppn;
return(total);
}

console.log(arkaFood(75000,"ARKAFOOD5",5,"False"));