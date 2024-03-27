
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form_log").addEventListener("submit", function(event) {
        event.preventDefault();
        var userx = document.getElementById("userx").value.trim();
        var passx = document.getElementById("passx").value.trim();
        if(userx=="" || passx==""){
            alert("Todos os campos devem estar preenchidos!")
        }
        else{
            window.location.href="views/home/home.html";
        }
    });
});