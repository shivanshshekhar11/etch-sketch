let color = "black";
let mclick = false;

let pad = document.querySelector("#pad");
let pix;

for(let i=0; i<8000 ;i++){
    pix = document.createElement("div");
    pix.setAttribute("style","border-style:solid; border-width:0.1px; border-color:skyblue; margin:0");
    pix.classList.add("pixel");
    pad.appendChild(pix);
}

pad.addEventListener("mousedown",()=>{
    mclick=true;
})

pad.addEventListener("mouseup",()=>{
    mclick=false;
})

pad.addEventListener("mouseover",(e)=>{
    if(mclick==true){
        e.target.style.cssText += "background-color:" + color;
    }
})

function clearPad(){
    let pixels = document.querySelectorAll(".pixel");
    for(let i = 0; i<8000 ; i++){
        pixels[i].setAttribute("style","border-style:solid; border-width:0.1px; border-color:skyblue; margin:0");
    }
}

let clear = document.querySelector("#clear");
clear.addEventListener("click",clearPad);

let eraser = document.querySelector("#eraser");
eraser.addEventListener("click",()=>{color="lightblue";});

let newcolor = document.querySelector("#newcolor");
newcolor.addEventListener("click",()=>{
    color=prompt("Enter the new color :-","black");
})