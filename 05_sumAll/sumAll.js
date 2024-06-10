const sumAll = function(start,end) {
    let sum=0;
    if(start>end){
        let temp=start;
        start=end;
        end=temp;
    }
    if(start<0 || end<0){
        return 'ERROR';
    }else if(typeof(start)=='string' || typeof(end)=='string'){
        return 'ERROR';
    }else if(typeof(start)=='object' || typeof(end)=='object'){
        return 'ERROR';
    }
    for(let i=start;i<=end;i++){
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
