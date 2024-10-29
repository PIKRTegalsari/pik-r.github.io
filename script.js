//thumbnail
gsap.from(".img-thumbnail", { duration: 2, rotationX: 360 });
gsap.from(".navbar", { duration: 1.5, opacity: 0, y: "-100%", ease: "bounce" });
gsap.from(".display-4", { delay: 1, duration: 1, opacity: 0, x: "-10%" });

gsap.registerPlugin(TextPlugin);
gsap.to(".lead", { delay: 1.5, duration: 2, text: "Saatnya yang Muda yang Berencana" });

const galleryImages = document.querySelectorAll(".gallery-img");
const delayTimes = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
const newDelay = shuffleArray(delayTimes);
galleryImages.forEach((img, i) => {
  img.dataset.aos = "fade-up";
  img.dataset.aosDelay = i * 50 + "";
  // img.dataset.aosDelay = newDelay[i];
});

AOS.init({
  once: true,
  duration: 3000,
});
//thumbnail

//contact
const scriptURL = "https://script.google.com/macros/s/AKfycbyk8JrrRvAG44tVmL_N3hGZt3L0BN2JPVVZwi1TxBFHnAd2T_-nSrbUqVToFI9N2W9G/exec";
const form = document.forms["contact"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      // tampilkan alert
      myAlert.classList.toggle("d-none");
      // reset formnya
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
//contact

//
