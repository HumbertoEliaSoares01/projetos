/*
    Lógica de Programação

    [ ] Pegar a informação do input quando o botão for clicado
    [ ] Ir até a API e trazer asreceitas
    [ ] Colocar as receitas na tela
    [ ] Saber quando o sus´rio clicou na receita
    [ ] Buscar informações da receita individual na API
    [ ] Colocar a receita individual na tela

*/
const input = document.querySelector('.search-input')
const form = document.querySelector('.search-form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    console.log(event.target [0].value)
})