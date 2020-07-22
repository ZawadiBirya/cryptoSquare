var myArray=new Array();
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    var inputText=document.getElementById("text-area").value;
    myArray.push(inputText);
    alert(myArray);
  });
});
