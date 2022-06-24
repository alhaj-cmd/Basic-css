function isLeapYear (year){
    if ((year % 400 === 0 ) || ((year % 4 === 0) && (year % 100 !==0)))
    {
 console.log(`${year} is a leap year!`);

}
 else {
     console.log(`${year} is not a leap year!`);

}
}

isLeapYear(2026);

const vowels  = ['a','b', 'c', 'l','o','d'];
function countV (sentence) {
    let count = 0;
    const lets = Array.from(sentence);

    lets.forEach(function(value){
        if(vowels.includes(value)){
            count++
        }
    });
    return count;
   
}
console.log(countV("i love bd"));