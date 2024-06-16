const fibonacci = function(num) {
    if(+num==0){
        return 0;
    }else if(+num<0){
        return 'OOPS';
    }
    let result=[1,1];
    for(let i=2;i<+num;i++){
        result[i]=result[i-1]+result[i-2];        
    }
    return result[+num-1];
};

// Do not edit below this line
module.exports = fibonacci;
