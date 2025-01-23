
function adicionarTarefa() {
    //  recebe o input do usuário
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim()
    //  encurta o código
    const mensagem = document.getElementById("mensagem")

    //  Se o valor do input for vazio mostre uma mensagem de erro para o 
    //  usuário, se não, execute a função adicionarTarefa()
    if (tarefa == ""){
        let mensagemErro = "Nenhuma tarefa foi digitada.";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = "#a34743"
    }
    else{    
        //  cria um elemento li e innsere na ul
        const listaTarefas = document.getElementById("listaTarefas")
        let novaTarefa = document.createElement("li")
        novaTarefa.textContent = tarefa
        //  mensagem de adicionada com sucesso
        listaTarefas.appendChild(novaTarefa)
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = "#28a745"
    }
        //  apaga o inout de exibe o placeholder
        inputTarefa.value = ""
}

