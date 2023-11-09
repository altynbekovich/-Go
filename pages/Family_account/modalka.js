var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementById("closeBtn");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
  console.log("ghvjbk");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

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
