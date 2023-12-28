function submitForm() {

    
    var name = encodeURIComponent(document.getElementById("username").value);
    var email = encodeURIComponent(document.getElementById("user-email").value);
    var motivos = encodeURIComponent(document.getElementById("reason").value);
    var emailLink = "mailto:?subject=" + subject + "&body=" + body;
    
    var body = "Olá, gostaria de solicitar a exclusão da minha conta, e de todos os dados relacionados a ela, da base de dados da economizaí" +
               "Meus dados: " +
               "Nome: " + name +
               "Email: " + email;
               "Motivo(s) de exclusão da conta: " + motivos;


    alert("teste")
    // window.location.href = emailLink;

    // window.open(emailLink, "_blank");
}
