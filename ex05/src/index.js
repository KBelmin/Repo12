var myPetsArray = [
    {
        animalType: "Dog",
        name: "Goofy",
    },
    {
        animalType: "Cat",
        name: "MicMac",
    },
    {
        animalType: "Bird",
        name: "Donald"
    }
]

function myPetsFunction(pets) {
    pets = myPetsArray[1].name;
    return pets;
}

console.log(myPetsFunction(myPetsArray));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;