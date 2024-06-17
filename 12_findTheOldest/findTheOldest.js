const findTheOldest = function(array) {
    const oldest = array.reduce((age,person)=>{
        if(person.yearOfDeath===undefined){
            person.yearOfDeath=new Date().getFullYear();
        }
        if((person.yearOfDeath-person.yearOfBirth)>age.oldest){
            age.oldest=person.yearOfDeath-person.yearOfBirth;
            age.name=person.name;
        }
        return age;
    },{
        oldest:0,
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
