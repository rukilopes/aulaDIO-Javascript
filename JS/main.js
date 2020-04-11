function botao(){
    document.getElementById("agradecimento").innerHTML = "<b><i>Obrigado por clicar!</i></b>";
    //incrementa um texto no elemento em bold e itálico

    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://digitalinnovation.one/"); //abre em uma nova aba

    // window.location.href = "https://digitalinnovation.one/"; //abre na mesma aba
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!";
    // alert("Trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

// function soma(n1,n2){
//     return n1 + n2;
// }


// function setReplace(frase,nome,novo_nome){
//     return frase.replace(nome,novo_nome);
// }

// function validaIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true; 
//     } else {
//         validar = false;
//     }

//     return validar;
// }

// var idade = prompt("Qual sua idade?");
// console.log(validaIdade(idade));


// alert(soma(1,4));
// console.log(setReplace("Bom dia Emily ","Emily","Ramona"));


// var data = new Date();
// console.log("data completa: " + data);
// console.log("mês: " + (data.getMonth()+1));
// console.log("minutos: " + data.getMinutes());
// console.log("dia: " + data.getDay());
// console.log("horas: " + data.getHours());



// for(var count = 0 ; count <= 5 ; count ++){
//     alert(count);
// };


// var count = 0;
// while(count <= 5){
//     console.log(count);
//     alert(count);
//     count++;
// }


// var idade = prompt("Qual sua idade?");//usuário digita a idade no alerta
// if (idade >= 18){
//     alert("maior de idade");
// } else {
//     alert("menor de idade");
// }


// var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
// console.log(frutas);
// alert(frutas[1].nome);


// var fruta = {nome:"maça", cor:"vermelha"}
// console.log(fruta);
// console.log(fruta.nome);
// alert(fruta.cor);

// var lista = ["maça","pêra","laranja"];
// console.log(lista); //trata como array
// console.log(lista.toString()); //trata como string
// console.log(lista[0]);
// console.log(lista.toString()[0]);//primeiro caractére da string x
// console.log(lista.join(" - "));//separar itens por -
// lista.pop();//exclui item da lista
// lista.push("uva"); //adiciona item na lista
// console.log(lista.length); //tamanho da lista
// alert(lista[1]); //item específico da lista



// var nome = "Emily Piazza Lopes";
// var n1 = 5;
// var n2 = 3;
// var frase = "Olá, tudo bem?";


// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);

// console.log(nome);
// console.log(n1 * n2);
// console.log(frase.replace("Olá","Bom dia"));
// console.log(frase.toUpperCase());