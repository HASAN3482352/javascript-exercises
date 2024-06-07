const repeatString = function(str1 , num1) {
    let str = '';
    if(num1>=0){
        for(let i=0;i<num1;i++){
            str += str1;
        }
    }else{
        str += 'ERROR';
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
