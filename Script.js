let leftDiv = document.querySelector(".left");
let rightDiv= document.querySelector(".right-top");
let rightBottomDiv= document.querySelector(".right-bottom");
let addressBar = document.querySelector("#address-bar");
for (let i = 1; i < 101; i++) {
    let div=document.createElement("div");
    div.setAttribute("class","cell");
    div.innerHTML=i;
    leftDiv.appendChild(div);
}

for (let i = 65; i < 91; i++) {
    let div=document.createElement("div");
    div.setAttribute("class","right-cell");
    div.innerHTML=String.fromCharCode(i);
    rightDiv.appendChild(div);
}


for (let i = 1; i < 101; i++) {
   for (let j = 65; j <91; j++) {
    let div=document.createElement("div");
    div.setAttribute("class","right-main-cell");
    div.setAttribute("contenteditable", "true");
    getCellAdd(div,i,j);
    
    rightBottomDiv.appendChild(div);
       
   }
}

function getCellAdd(div, i ,j){
    let cell= div;
    cell.addEventListener("click",()=>{
        console.log(i);
        console.log(String.fromCharCode(j));
        addressBar.value=` ${String.fromCharCode(j)}${i}`;
        
    })

}