document.addEventListener("DOMContentLoaded",()=>{

const o=document.getElementById("opening"),
b=document.getElementById("openBtn");

b?.addEventListener("click",()=>{
o.classList.add("hidden");
document.body.classList.remove("locked");
});

const r=document.querySelectorAll(".reveal");

const x=new IntersectionObserver(e=>{
e.forEach(i=>{
if(i.isIntersecting)i.target.classList.add("visible");
});
},{threshold:.15});

r.forEach(i=>x.observe(i));

});
