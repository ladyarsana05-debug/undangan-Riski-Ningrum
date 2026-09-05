document.addEventListener("DOMContentLoaded",()=>{

const o=document.getElementById("opening"),
b=document.getElementById("openBtn"),
m=document.getElementById("music"),
mb=document.getElementById("musicBtn");

b?.addEventListener("click",()=>{
o.classList.add("hidden");
document.body.classList.remove("locked");

m?.play();
mb.style.display="block";
});

mb?.addEventListener("click",()=>{
if(m.paused){
m.play();
mb.innerHTML="♫";
}else{
m.pause();
mb.innerHTML="Ⅱ";
}
});

const r=document.querySelectorAll(".reveal");
const x=new IntersectionObserver(e=>e.forEach(i=>{
if(i.isIntersecting)i.target.classList.add("visible")
}),{threshold:.15});

r.forEach(i=>x.observe(i));

const d=new Date("Sep 13,2026 00:00:00").getTime();

setInterval(()=>{
let z=Math.max(0,d-Date.now());

document.getElementById("days").innerHTML=Math.floor(z/86400000);
document.getElementById("hours").innerHTML=Math.floor(z%86400000/3600000);
document.getElementById("minutes").innerHTML=Math.floor(z%3600000/60000);
document.getElementById("seconds").innerHTML=Math.floor(z%60000/1000);
},1000);

});

window.openImage=s=>{
let l=document.getElementById("lightbox");
document.getElementById("lightbox-img").src=s;
l.style.display="flex";
}

window.closeImage=()=>{
document.getElementById("lightbox").style.display="none";
}

window.copyText=t=>{
navigator.clipboard.writeText(t);
alert("Nomor berhasil disalin!");
}
