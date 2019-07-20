function is_username_valid(re) {
    var reu = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,9}$/;
    if (re.match(reu)){
        return true;
    } 
    else {
        return false;
    }
}

function is_password_valid(rei){
    var rep= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*=)(?=.*[\=\+\-\_\@\#\$\%\&]).{8,}$/; 

    if (rei.match(rep)){
        return true;
    } 
    else {
        return false;
    }
}

console.log(is_username_valid("Xruaf888"));
console.log(is_password_valid("X$=%rusada8"));

