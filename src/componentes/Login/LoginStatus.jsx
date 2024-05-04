const isLoggedIn = true;
function handleClick(){
    alert("Botão Clicado")
}
//Componente Loginstatus
function Loginstatus(){
    return(
        <div>
            <h2>
                {isLoggedIn ? "Bem vindo(a)." : "Por favor, faça login"}
            </h2>
            <button onClick={handleClick}>
                {isLoggedIn? "Sair" : "Entrar"}
            </button>
        </div>
        )
    }
        export default Loginstatus;