let s1= document.getElementById("sq1");
s1.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*100);
    s1.innerHTML=`<h1>${r}</h1>`;
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML="<h1>1</h1>";
})

let s2= document.getElementById("sq2");
s2.addEventListener("mouseenter",function(){
    s2.style.backgroundColor="green";
    
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="red";
    s2.style.backgroundColor="white";
})