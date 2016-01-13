$(document).ready(function() {

  var like = prompt("Do you like animals?").toLowerCase();

  if (like === "yes") {
    $(".animals").show();
  } else if(like === "no") {
    alert("How dare you.");
  } else{
    alert("Please say yes or no.")
  };



});
