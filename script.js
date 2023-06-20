function clickCards() {
  $('#rooms').removeClass('hidden');
  $('#viewbtn').remove();
}

function selectItem() {
  var x = document.getElementById("Id01");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function selectRoom() {
  var x = document.getElementById("Id02");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
