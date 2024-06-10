const removeFromArray = function(arr,...args) {
    let newArr=[],x=0; 
    for(let i=0;i<arr.length;i++){
        x=0;
        for(let j=0;j<args.length;j++){
            if(arr[i]!==args[j]){
                x++;
            }
        }
        if(x==args.length){
            newArr.push(arr[i]);
        }
    }
    return newArr;

};

// Do not edit below this line
module.exports = removeFromArray;
