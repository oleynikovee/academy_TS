var User = /** @class */ (function () {
    function User(Id, Name, SurName, Age) {
        this.id = Id;
        this.name = Name;
        this.surName = SurName;
        this.age = Age;
    }
    return User;
}());
var namesArray = ["Jhon", "Bob", "George", "Alan", "Eliot"];
var surNamesArray = ["Readlen", "Smith", "Ban", "Leanden", "Kreadeal", "Manden"];
function rndNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function createArrayOfUsers() {
    var array = [];
    var sizeOfArray = rndNum(3, 5);
    for (var i = 0; i < sizeOfArray; i++) {
        var user = new User(i, namesArray[rndNum(0, 4)], surNamesArray[rndNum(0, 6)], rndNum(1, 70));
        array.push(user);
    }
    return array;
}
function updateObjectInArray(initialArray, key, value, someFields) {
    initialArray.forEach(function (element) {
        switch (key) {
            case "id":
                if (element.id === value) {
                    element.id = someFields.id;
                }
                break;
            case "name":
                if (element.name === value) {
                    element.name = someFields.name;
                }
                break;
            case "surName":
                if (element.surName === value) {
                    element.surName = someFields.surName;
                }
                break;
            case "age":
                if (element.age === value) {
                    element.age = someFields.age;
                }
                break;
        }
    });
    return initialArray;
}
console.log(updateObjectInArray(createArrayOfUsers(), "name", "Bob", { name: "BOB" }));
