const defaultName=[         //default names that will be displayed first
    {
        Name:"Alice",
        Occupation:"Writer",
        Price: 30,
    },
    {
        Name:"Bob",
        Occupation:"Teacher",
        Price: 50,
    }
]

let randomName=["Sam", "Pam", "Ammy", "Jimmy", "Jeff", "Mark", "Satya"];        //array of random names
let randomOccupation=["Driver", "Carpenter", "Waiter", "Cook", "Bartender", "Rapper", "Athlete"];       //array of random profession

const addIntervalId=setInterval(addName,3000);      //calls a function every 3 sec to add random freelancer to the table    

render();       //gets called in once to render the webpage

function averagePrice(){        //function to calculate average price
    let total=0;
    for(let i=0;i<defaultName.length;i++){
        total+=defaultName[i]["Price"];         //gets the value of the price key for each object that are inside the array defaultName
    }
    return total/defaultName.length;
}
function displayAverage(){
    const a=document.querySelector("#average");
    a.textContent="The average price is $"+averagePrice().toFixed(2);       //passes the average value to the HTML content
}

function render(){
    const mylist=document.querySelector("#tbody");
    for(let i=0;i<defaultName.length;i++){              //loops through the defaultName array to grab the value of each key
        const node=document.createElement("tr");
        const nodeName=document.createElement("td");
        const nodeOccupation=document.createElement("td");
        const nodePrice=document.createElement("td");
        nodeName.textContent=defaultName[i]["Name"];        //assign the value to the newly created table data
        nodeOccupation.textContent=defaultName[i]["Occupation"];
        nodePrice.textContent="$ "+defaultName[i]["Price"];
        node.append(nodeName);          //add the table data to the table row
        node.append(nodeOccupation);
        node.append(nodePrice);
        mylist.append(node);            //finally add the table row to the table
        displayAverage();               //update the average display each time a new row is added
    }   
}

function addName(){
    let d=new Date();       //date is used to create random price
    let randomNumber=Math.floor((Math.random()*(randomName.length-1)));     //create a random number to select a random name
    let randomNumber1=Math.floor((Math.random()*(randomName.length-1)));    //create a random number to select a random occupation
    let randomObj={Name: randomName[randomNumber], Occupation: randomOccupation[randomNumber1], Price: (10+d.getSeconds()+(randomNumber*randomNumber1))};   //assign the random name, occupation and price to an object
    defaultName.push(randomObj);        //push that new object to the defaultName array so that accurate average price can be calculated
    const mylist=document.querySelector("#tbody");      //repeat the same step as in the render() function to add data to the table
    const node=document.createElement("tr");
    const nodeName=document.createElement("td");
    const nodeOccupation=document.createElement("td");
    const nodePrice=document.createElement("td");
    nodeName.textContent=randomObj["Name"];
    nodeOccupation.textContent=randomObj["Occupation"];
    nodePrice.textContent="$ "+randomObj["Price"];
    node.append(nodeName);
    node.append(nodeOccupation);
    node.append(nodePrice);
    mylist.append(node);
    displayAverage();
    let x=randomName.splice(randomNumber,1);        //remove the random name and occupation that were last used so that they are not repeated again
    let y=randomOccupation.splice(randomNumber1,1);
    if(randomName.length===0){          //stop recalling the addName function when all the names inside the randomName array has been used
        console.log("List Complete");
        clearInterval(addIntervalId);
    }
}

