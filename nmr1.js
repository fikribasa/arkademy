function myProfile(nama, umur, alamat, hobi, status, sekolah, skill, intsc) {
    var  biodata={
    name : nama,
    age : umur ,
    address : alamat,
    hobbies : hobi,
    is_married : status,
    list_school : sekolah,
    skills : skill,
    interest_in_coding : intsc
    };
    return JSON.stringify(biodata);
}
    nama = "Muhammad Fikri";
    umur = 24 ;
    alamat = "Jalan Cepaka No. 49 Blitar";
    hobi = "utak atik barang bekas";
    status = false;
    sekolah = {
        name : "Politeknik Negeri Malang",
        year_in : 2014,
        year_out : 2019,
        major : "Teknik Elektro"
    };
    skill = {
        skill_name : "fiber optik",
        level : "advanced"
    };
    intsc= true;
    
    console.log(myProfile(nama,umur,alamat,hobi,status,sekolah,skill,intsc));
