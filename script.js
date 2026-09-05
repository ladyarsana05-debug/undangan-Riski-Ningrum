document.addEventListener("DOMContentLoaded",()=>{

const o=document.getElementById("opening"),b=document.getElementById("openBtn");

b?.addEventListener("click",()=>{
o.classList.add("hidden");
document.body.classList.remove("locked");
});

const r=document.querySelectorAll(".reveal");
const x=new IntersectionObserver(e=>e.forEach(i=>{
if(i.isIntersecting)i.target.classList.add("visible")
}),{threshold:.15});

r.forEach(i=>x.observe(i));

const d=new Date("Sep 13,2026 00:00:00").getTime();

setInterval(()=>{
let n=Date.now(),z=Math.max(0,d-n);

document.getElementById("days").innerHTML=Math.floor(z/86400000);
document.getElementById("hours").innerHTML=Math.floor(z%86400000/3600000);
document.getElementById("minutes").innerHTML=Math.floor(z%3600000/60000);
document.getElementById("seconds").innerHTML=Math.floor(z%60000/1000);
},1000);

});
