//Variavel com escopo de bloco
//Como declarar variável: let e const
if(true){
    let blocoEscopo = "Eu fico só nesse if";
    let numero = 10;
}

//Sout no javaScript
console.log("Eu sou um print");
console.log(numero);

//Declaração de objeto
const meuObjeto= {name:"Isabella"};  //Criamos o objeto
meuObjeto.name= "Bora codificar!";   //Atribuição de valor
//Estamos modificando a proprieade de um objeto 
//e não a constante em si

//Como fazer as funções nas antigas
function hello(name){
    return "Olá," + name + "!";
}

//Funções atuais Arrow Function
//Função com parametro
const hello= nome => "Olá," + nome + "!";
//Função sem parametro
const hellow= () => "Olá," + nome + "!";

//Exemplo

//Desestruturando objetos
const pessoa= {
    firstName: "João",
    lastName: "da Silva",
    age: 20
};
//Declarar que as constantes firstNmae e age são = pessoa
const{firstName, age, lastName} = pessoa;
console.log(firstName); //João
console.log(age); //20
console.log(lastName); //da Silva

//Criar um Array
const colors = ['vermelho', 'azul', 'verde', 'amarelo'];
//atribuir os valores quando for array usa[]
const[firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); //vermelho
console.log(secondColor); //azul
console.log(thirdColor); //verde
//e se quizesse pegar a quarta cor?
const[, , ,fourthColor]= colors;
console.log(fourthColor)

//Desestruturando as funções
function displayInfo({firstName,age}){
    //quando usamos `` conseguimos usar texto e variavel
    console.log(`${firstName} tem $(age) anos,`);
}
const pessoaInfo = {
    firstName: "Maria",
    lastName: "Fernandes",
    age: 25
}
displayInfo(pessoaInfo); //Maria tem 25 anos
 
//Componente funcional em react
function welcome({firstName,age}){
    return
    <div>
        Bem Vindo,{firstName}, você tem {age} anos.
    </div>
};

// Promisses - uma promessa a ser cumprida
// Estados das Promisses
// Pending (Pendente) é o estado inicial
// Fullfilled (Realizado) operação concluída
// Rejected (Rejeitada) operação falhou
// async/await
// async lança promessa sincronizada porem se tiver o await
// a promessa é aguardada
async function fetchData(){
    try{
        let response = await fetch(`https://sc.senai.br/alunos/1`);
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log("Houve um erro...", error)
    }
}
fetchData();

//Exercicios:
//1. Declare duas variaveis:
//nome com valor "React" e versão com valor "1.0.0"
//Em seguida, exiba uma mensagem que diz
//`Estudando [nome] na versao ${versao}`

if(true){
    let nome = "React";
    let versao = "1.0.0";

    console.log(`estudando ${nome} na versao ${versao}`)
}

//2. Crie uma arrow function que receba dois numeros 
//e retorne a soma deles

const num1 = 5;
const num2 = 16;

const soma = (num1, num2) => num1 + num2;
console.log(soma(num1,num2));
console.log(soma(5,16));



