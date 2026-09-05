document.addEventListener("DOMContentLoaded", () => {
const p=new URLSearchParams(location.search);
const g=p.get("to");

if(g){
document.getElementById("guestName").innerHTML=g.replace(/\+/g," ");
}
const o = document.getElementById("opening");
const b = document.getElementById("openBtn");
const m = document.getElementById("music");
const mb = document.getElementById("musicBtn");

/* BUKA UNDANGAN + MULAI MUSIK */
b?.addEventListener("click", () => {

  o?.classList.add("hidden");
  document.body.classList.remove("locked");

  if (m) {
    m.play()
      .then(() => {
        console.log("Musik berhasil diputar");
        if (mb) {
          mb.style.display = "block";
          mb.innerHTML = "♫";
        }
      })
      .catch((error) => {
        console.log("Musik gagal diputar:", error);
        if (mb) {
          mb.style.display = "block";
          mb.innerHTML = "▶";
        }
      });
  }

});


/* TOMBOL PLAY / PAUSE MUSIK */
mb?.addEventListener("click", () => {

  if (!m) return;

  if (m.paused) {

    m.play()
      .then(() => {
        mb.innerHTML = "♫";
      })
      .catch(error => {
        console.log(error);
      });

  } else {

    m.pause();
    mb.innerHTML = "Ⅱ";

  }

});


/* ANIMASI REVEAL */
const r = document.querySelectorAll(".reveal");

const x = new IntersectionObserver(entries => {
  entries.forEach(i => {
    if (i.isIntersecting) {
      i.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

r.forEach(i => x.observe(i));


/* COUNTDOWN */
const d = new Date("Sep 13, 2026 00:00:00").getTime();

setInterval(() => {

  let z = Math.max(0, d - Date.now());

  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");

  if (days) days.innerHTML = Math.floor(z / 86400000);

  if (hours)
    hours.innerHTML = Math.floor(
      z % 86400000 / 3600000
    );

  if (minutes)
    minutes.innerHTML = Math.floor(
      z % 3600000 / 60000
    );

  if (seconds)
    seconds.innerHTML = Math.floor(
      z % 60000 / 1000
    );

}, 1000);

});


/* GALERI FOTO */
window.openImage = s => {

  const l = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");

  if (l && img) {
    img.src = s;
    l.style.display = "flex";
  }

};


window.closeImage = () => {

  const l = document.getElementById("lightbox");

  if (l) {
    l.style.display = "none";
  }

};


/* COPY TEXT */
window.copyText = t => {

  navigator.clipboard.writeText(t);

  alert("Nomor berhasil disalin!");

};
