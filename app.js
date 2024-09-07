function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Para fins de depuração, verifica se a seção foi encontrada

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    //se campoPesquisa for uma string vazia sem  nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Modelo não encontrado</p> "
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao ="";
    let tags = "";

    // Itera sobre cada dado da lista de resultados e gera o HTML correspondente
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
             // Cria um novo elemento HTML para cada resultado
        
        console.log(dado.titulo.includes(campoPesquisa)) 
        
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`;
        } 
    }

    if (!resultados) {
        resultados = "<p>Modelo não encontrado</p>"
    }

    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
}



