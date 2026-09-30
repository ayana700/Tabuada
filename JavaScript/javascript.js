let numero, saída, v;
function Gerar(){
    numero = Number(document.getElementById("numero").value)
    //pega o valor digitado no input com id = "numero"
    //e converte para número
    saída = "";
    if(numero < 0){
        saída = "digite um número maior que zero."
        //mensagem de erro
    }
    else if(numero > 10){
        saída = "<h3> Número grande </h3> "
    }
    else{
        for(v=0;a<=10;v++){
            saída = saída + numero +"x" + v + "=" + (numero*a) + "<br>";
        }
    }
    document.getElementById("resultado").innerHTML = saída
}

function Mostrar()
{
    let alunos = ["Ana", "Pedro", "Elvis", "Lucas"];

    let saída2 = "";

    for(let a = 0; a < alunos.length; a++){
        saída2 = saída2 + alunos[a] + "<br>"
    }
    document.getElementById("alunos").innerHTML = saída2;
}