let boxes =document.querySelectorAll(".btns");
let resetbtn=document.querySelector(".reset");
let player0=true;
let newbtn=document.querySelector(".new");
let msgcontainer=document.querySelector(".msgc");
let msg=document.querySelector(".msg");
let drew=document.querySelector(".draw");
let new1btn=document.querySelector(".drew");

function disableBoxes(){
    for (let box of boxes){
      box.disabled=true;  
    }
 }
let winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(player0){
            box.innerHTML="X";
            player0=false;
        }
        else
        {
            box.innerHTML="O";  
            player0=true;
        }
        box.disabled=true;
    checkWinner();
    let i=0;
    for(var j=0;j<boxes.length;j++){
        
        if(boxes[j].innerHTML!=""){
            i++;
        }
        if(i===9  ){
            draw(); }
}})
    
});
function showWinner(player){
   msg.innerHTML="Winner is "+ player;
   msgcontainer.classList.remove("hide");
   disableBoxes();

}
function checkWinner(){
    for(pattern of winningCombos){
        const pos1=boxes[pattern[0]].innerHTML;
        const pos2=boxes[pattern[1]].innerHTML;  
        const pos3=boxes[pattern[2]].innerHTML;
        if(pos1 !="" && pos2!="" && pos3!="")
        {
        if(pos1 === pos2 && pos2 === pos3){
            showWinner(pos1);
            
        } 
        }
    }
    
}

function resetgame(){
    turn0=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
    drew.classList.add("hide");
}

function enableBoxes(){
   for (let box of boxes){
     box.disabled=false;  
     box.innerHTML="";
   }
}

newbtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
new1btn.addEventListener("click",resetgame);
function draw(){
        {drew.classList.remove("hide");
}}

