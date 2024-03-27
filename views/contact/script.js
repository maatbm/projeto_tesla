function end(){
    document.getElementById('form_msg').addEventListener('submit', function(event) {
        event.preventDefault();
        var nome = document.getElementById('nome').value.trim();
        var email = document.getElementById('email').value.trim();
        var msg = document.getElementById('textarea').value.trim();
        if(nome =="" || email=="" || msg==""){
            alert("Todos os campos devem estar preenchidos")
            location.reload();
        }
        else{
            alert("Mensagem enviada com sucesso");
            location.reload();
        }
    });
}