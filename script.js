var player1;
var player2;
var count=1;
var p1var=0;
var p2var=0;
var combinations=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
var p1items=[];
var p2items=[];
function start(){
    if(player1){
        let left=document.querySelector(".left");
        let right=document.querySelector(".right");
        left.style.left="-700px";
        right.style.right="-700px";
        Sbtn=document.querySelector(".Sbtn");
        Sbtn.style.display="none"
        let p1h2=document.querySelector("#p1h2");
        let p2h2=document.querySelector('#p2h2');
        p1h2.textContent=`${player1} turn`;
        p2h2.textContent=player2;
    }
    else{
        alert("please enter your choice!");
    }
}
function dof(event){
    if(count % 2 != 0){
        p1items[p1var]=parseInt(event.target.id.replace("b",""));
        p1var++;
        event.target.textContent=player1;
        count++;
        event.target.onclick="none";
        let p2h2=document.querySelector('#p2h2');
        p2h2.textContent=`${player2} turn`;
        let p1h2=document.querySelector("#p1h2");
        p1h2.textContent=player1;
    }
    else{
        p2items[p2var]=parseInt(event.target.id.replace("b",""));
        p2var++;
        event.target.textContent=player2;
        count++;
        event.target.onclick="none";
        let p1h2=document.querySelector("#p1h2");
        p1h2.textContent=`${player1} turn`;
        let p2h2=document.querySelector('#p2h2');
        p2h2.textContent=player2;
    }
    if(count==10){
        setTimeout(()=>{
            alert("Game Over!");
            let conf=confirm("Do you want to play again?");
            if(conf){
                location.reload();
            }
        },10);
    }
    if(count>=5){
        let play1=0,play2;
        for(let i=0;i<8;i++){
            for(let j=0;j<3;j++){
                for(let z=0;z<p1var;z++){
                    if(combinations[i][j]==p1items[z]){
                        play1++;
                    }
                }
                for(let z1=0;z1<p2var;z1++){
                    if(combinations[i][j]==p2items[z1]){
                        play2++;
                    }
                }
            }
            if(play1==3){
                end("p1");
            }
            if(play2==3){
                end("p2");
            }
            play1=0;
            play2=0;
        }

    }
}
function end(p){
    let p1h2=document.querySelector("#p1h2");
    let p2h2=document.querySelector('#p2h2');
    if(p=="p1"){
        p1h2.textContent="Win!";
        p2h2.textContent="Loss";
    }
    else{
        p1h2.textContent="Loss";
        p2h2.textContent="Win!";
    }
    setTimeout(()=>{
        if(p=="p1"){
            alert("Player 1 is win! Game Over!");
        }
        else{
            alert("Player 1 is win! Game Over!");
        }
        let boxitem=document.querySelectorAll(".box");
        boxitem.forEach((i)=>{
        i.onclick="none"}
        );
        let conf=confirm("Do you want to play again?");
        if(conf){
            location.reload();
        }
    },10);
    
}
function symbolchange(){
    let h1=document.querySelectorAll(".symbol");
    h1[0].textContent="Your Symbole is!";
    h1[1].textContent="Your Symbole is!";
}
function Ofun(){
    symbolchange();
    let option2=document.querySelector(".option2");
    let option3=document.querySelector(".option3");
    option2.style.display="none";
    option3.style.display="none";
    player1="O";
    player2="X";
}
function Xfun(){
    symbolchange();
    let option1=document.querySelector(".option1");
    let option4=document.querySelector(".option4");
    option1.style.display="none";
    option4.style.display="none";
    player1="X";
    player2="O";
}
function Osymbole(){ 
    Ofun();
}
function Xsymbole(){
    Xfun();
}
function Osymbole1(){ 
    Xfun();
}
function Xsymbole2(){
    Ofun();
}