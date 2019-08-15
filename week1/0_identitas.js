let arrayOb =[
  {school:'SMP 1 Blitar', yearIn:2008, yearOut:2011},
  {school:'SMAN 1 Blitar', yearIn:2011,yearOut:2014}
];
let pushAr ={school:'Politeknik Negeri Malang', yearIn:2014, yearOut:2018};

function tambahData(){
  arrayOb.push(pushAr); //tambah ke terakhir
  arrayOb.unshift({school:'SDN Kalipang 1', yearIn:2002,yearOut:2006}); //tambah ke awal
  return arrayOb;
};

function editData(){
  for (let i=0;i<arrayOb.length;i++){
      if (arrayOb[i].school==='SMP 1 Blitar'){
          arrayOb[i].yearIn=2007;
          arrayOb[i].yearOut=2010;
      }
  } return arrayOb;
}

function deleteData(){
 // arrayOb.pop(); //hapus array terakhir
  arrayOb.shift(); // hapus array pertama
  return arrayOb;
}

console.log(tambahData());
