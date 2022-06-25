class User{
    constructor(Id:number,Name:string,SurName:string,Age:number){
        this.id=Id;
        this.name=Name;
        this.surName=SurName;
        this.age=Age;
    }
    id: number;
    name: string;
    surName: string;
    age: number;
}

const namesArray=["Jhon","Bob","George","Alan","Eliot"];
const surNamesArray=["Readlen","Smith","Ban","Leanden","Kreadeal","Manden"];
function rndNum(min:number, max:number):number{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function createArrayOfUsers():Array<User>{
    let array:Array<User>=[];
    let sizeOfArray=rndNum(3,5);
    for(let i=0;i<sizeOfArray;i++){
        let user=new User(i,namesArray[rndNum(0,4)],surNamesArray[rndNum(0,6)],rndNum(1,70));
        array.push(user);
    }
    return array;
}

function updateObjectInArray(initialArray:Array<User>,key:string,value:string|number,someFields:Partial<User>){
    initialArray.forEach(element=>{
        switch(key){
            case "id":
                if(element.id===value){
                    element.id=someFields.id!;
                }
                break;
            case "name":
                if(element.name===value){
                    element.name=someFields.name!;
                }
                break;
            case "surName":
                if(element.surName===value){
                    element.surName=someFields.surName!;
                }
                break;
            case "age":
                if(element.age===value){
                    element.age=someFields.age!;
                }
                break;
        }
    })
    return initialArray;
}

console.log(updateObjectInArray(createArrayOfUsers(),"name","Bob",{name:"BOB",}));