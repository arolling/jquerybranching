$(document).ready(function() {

  var age = confirm("Are you 21 or older?");

  if (age === true) {
    $(".over21").show();
  } else {
    $(".under21").show();
  };

});
