interface IUser {
    userId:number;
    id:number;
    title:string;
    body:string;
}

type Users={
    data:IUser[];
};

async function getPosts<Users>(url:string){
    try {
        const response=await fetch(url);
        if(!response.ok){
            throw new Error ("Error! status:"+response.status);
        }
        const result=(await response.json()) as Users;
        printData(JSON.stringify(result));
        return result;
    } catch (error:any) {
        if(error instanceof Error){
            console.log("error message:"+error.message);
        }
        else{
            console.log("unxepecter error"+error.message);
        }
    }
}
let data=getPosts("https://jsonplaceholder.typicode.com/posts");

function printData(data:string){
    let mainSelector=document.querySelector('.ts');
    let liSelector=document.createElement('li');
    const printData:Array<IUser>=JSON.parse(data);
    let newSelector=(userId:number,id:number,title:string,body:string)=>{
        liSelector.textContent=userId.toString()+"\n";
        liSelector.textContent+=id.toString()+"\n";
        liSelector.textContent+=title+"\n";
        liSelector.textContent+=body;
        mainSelector?.appendChild(liSelector);
    }
    for(let i=0;i<=printData.length;i++){
        newSelector(printData[i].userId,printData[i].id,printData[i].title,printData[i].body);
    }
}