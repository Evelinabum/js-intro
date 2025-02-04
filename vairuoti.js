/*
Sudėtingesnis. Write a function that takes age and hasLicense as arguments and returns:
"Can drive" if the person is 18 or older AND has a license
"Cannot drive" otherwise
*/

function vairuoti(amzius, hasLicense) {
    if (amzius >=18 && hasLicense === true) {
        return 'Can drive' ;
    } else {
        return 'Cannot drive';
    }
}

console.log(amzius(19, false));
console.log(amzius(17, false));
console.log(amzius(20, true));
console.log(amzius(17, true));

/*
Cannot drive
Cannot drive
Can drive
Cannot drive
*/