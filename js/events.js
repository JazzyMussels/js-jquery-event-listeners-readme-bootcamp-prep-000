//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  
}

function pressIt() {
  $(document).on('keydown', function(key) {
    if(key.which == 71) {
      alert('G was pressed')
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});

$(document).ready(function(){

});
