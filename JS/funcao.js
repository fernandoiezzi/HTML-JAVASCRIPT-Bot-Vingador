function msg(){
    alert("Obrigado " + document.deasuaopniao.nome.value + ", a sua opinião foi recebida com carinho!");
}

function caixaalta(){
    document.deasuaopniao.nome.value = document.deasuaopniao.nome.value.toUpperCase();
}

function butaosorteio(){
    if(document.sorteando.senhadosorteio.value=="botvingador"){
        alert("Obrigado por participar do sorteio e boa sorte!");
    }
    else{
        alert("Senha Incorreta! Para conseguir a senha, assista a live e anote a senha fornecida durante a transmissão.");
    }
    
}


