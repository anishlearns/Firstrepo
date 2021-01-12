$(document).ready(function(){
    $("#submit").click(function(event){
        var login = $("#login").val();
        if(login=='')
        {
            $("#error").empty();
         $("#error").val($("#error").append("*Please type and submit"));
         event.preventDefault();
        }
      });
});