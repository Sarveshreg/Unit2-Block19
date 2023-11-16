const defaultName=[
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
let freelancers = [
    { Name: "Dr. Slice", Price: 25, Occupation: "gardener" },
    { Name: "Dr. Pressure", Price: 51, Occupation: "programmer" },
    { Name: "Prof. Possibility", Price: 43, Occupation: "teacher" },
    { Name: "Prof. Prism", Price: 81, Occupation: "teacher" },
    { Name: "Dr. Impulse", Price: 43, Occupation: "teacher" },
    { Name: "Prof. Spark", Price: 76, Occupation: "programmer" },
    { Name: "Dr. Wire", Price: 47, Occupation: "teacher" },
    { Name: "Prof. Goose", Price: 72, Occupation: "driver" },
  ];
  let counter=0;
  let sum=0;
debugger

const addIntervalId=setInterval(addName,3000);

render();

function render(){
    const mylist=document.querySelector("#list");
    for(let i=0;i<defaultName.length;i++){
        const node=document.createElement("li");
    node.textContent=`${defaultName[i].Name}    ${defaultName[i].Occupation}    $${defaultName[i].Price}`; 
    mylist.append(node);
    sum+=defaultName[i].Price;
    counter++;
}
const myavg=document.querySelector("#average");
myavg.innerHTML=`The average starting price is $${(sum/counter).toFixed(2)}`;
}

function addName(){
    if(counter>9){
        clearInterval(addIntervalId);
    }
    const n=Math.floor(Math.random()*8);
    const a= freelancers[n];
    const mylist=document.querySelector("#list");
    const node=document.createElement("li");
    node.textContent=`${a.Name}   ${a.Occupation}    $${a.Price}`; 
    mylist.append(node);
    sum+=a.Price;
    delete freelancers[n];
    counter++;
    const myavg=document.querySelector("#average");
    myavg.innerHTML=`The average starting price is $${(sum/counter).toFixed(2)}`;
}
