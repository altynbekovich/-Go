
var modalTresh = document.getElementById("modalor");
var btnTresh = document.getElementById("modalor-show");
var spanTresh = document.getElementById("closeBtn");

function open() {
  modalTresh.style.display = "block";
  console.log("aerfaerf");
}

spanTresh.onclick = function () {
  modalTresh.style.display = "none";
};
