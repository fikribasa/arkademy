let arrayBuku =[
    {
        name : 'Harry Potter',
        status : 'Dapat dipinjam - Available'
    },
    {
        name : 'John Wick',
        status : 'Tidak dapat dipinjam - Not Available'
    },
    {
        name : 'Orang Orang Biasa',
        status : 'Tidak dapat dipinjam - Not Available'
    },
    {
        name : 'Muslim Produktif',
        status : 'Dapat dipinjam - Available'
    }
];

function cekBuku(judul) {                            
    let arrIndex = arrayBuku.map(function(x) {return x.name;}).indexOf(judul);
    let indexStatus = arrayBuku[arrIndex];
    return indexStatus.status;
    }

console.log(cekBuku('Orang Orang Biasa'));


// var elementPos = array.map(function(x) {return x.id; }).indexOf(idYourAreLookingFor);
// var objectFound = array[elementPos];

// function cekBuku(judul) {
//     for (var i=0; i<=arrayBuku.length ;i+=1 ) judul == arrayBuku.name;
//     return arrayBuku.status;
// }


