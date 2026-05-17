function myFunction() {
    console.log("Formulário enviado!")

    let name = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let origem = document.getElementById("origem").value;
    let destino = document.getElementById("destino").value;
    let data = document.getElementById("data").value;
    let adultos = document.getElementById("adultos").value;
    let criancas = document.getElementById("criancas").value;

    
    let mensagem = "Reserva concluída com sucesso! \n\n";
    mensagem += "Nome: " + name + "\n";
    mensagem += "E-mail: " + email + "\n";
    mensagem += "Telefone: " + telefone + "\n";
    mensagem += "CPF: " + cpf + "\n";
    mensagem += "Origem: " + origem + "\n";
    mensagem += "Destino: " + destino + "\n";
    mensagem += "Data de Viagem: " + data + "\n";
    mensagem += "Número de Adultos: " + adultos + "\n";
    mensagem += "Número de Crianças: " + criancas;

    alert(mensagem); 

    
}