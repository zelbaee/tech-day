const precoIngresso = 100;
const form = document.getElementById("form-inscricao");

function processarInscricao(nome, idade, prossuiCupom) {
    let precoFinal = precoIngresso;

    if(idade < 16) {
        console.log("Inscrição Bloqueada: "+nome+" não possui idade miníma")
    } else {
        if(prossuiCupom) {
            precoFinal = precoFinal - 20;
        }
        console.log("Inscrição Confirma para "+nome+"!");
        console.log("Valor a pagar: R$"+precoFinal+"");
    }    
}

function simularVendaDeIngressos () {
    for(let i = 5; i > 0; i--) {
        const palavra = i === 1 ? "vaga" : "vagas";
        console.log("Corra! Faltam apenas "+i+" "+palavra+" para o TechDay 2026");
    }
    console.log("Vagas Encerradas!");
}

form.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();
        console.log ("Formulário Interceptado com sucesso!");

        const valorNome = document.getElementById("nome-completo").value;
        const valorEmail = document.getElementById("email").value;

        let formularioValido = true;

        if(valorNome.trim() === ""){
            alert("Por favor, preencha o seu nome!");
            formularioValido = false;
            }
        
        if(valorEmail.trim() === ""){
            alert("Por favor, preencha o seu Email!");
            formularioValido = false;
            }

        if(formularioValido) {
        localStorage.setItem("techday_nome", valorNome);
        localStorage.setItem("techday_email", valorEmail);

        console.log("Dados salvos no LocalStorage com sucesso!");
        console.log("Nome salvo:", localStorage.getItem("techday_nome"));
        console.log("Email salvo:", localStorage.getItem("techday_email"));
            }

        if(formularioValido) {
        localStorage.setItem("techday_nome", valorNome);
        localStorage.setItem("techday_email", valorEmail);

        console.log("Dados salvos no LocalStorage com sucesso!");
        console.log("Nome salvo:", localStorage.getItem("techday_nome"));
        console.log("Email salvo:", localStorage.getItem("techday_email"));
            }
        
    }
)