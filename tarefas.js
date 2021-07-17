//classe tarefa
//classe não é hoisted.
class Tarefa {
    nome;
    categoria;
    realizada;
    constructor(nome, categoria, realizada) {
        this.nome = nome;
        this.categoria = categoria;
        this.realizada = realizada
    }
    criaItemsDeListaParaPagina(containerEl) {
        const template = `
            <li>
                ${this.nome}
            </li>
           `;
        const itemEl = document.createRange().createContextualFragment(template);
        itemEl.querySelector('li').classList.add('item-tarefa');
        itemEl.querySelector('li').classList.add(`categoria-${this.categoria}`);

        if (this.realizada) {
            itemEl.querySelector('li').classList.add('marcado');
        }

        containerEl.appendChild(itemEl);
    }

    static insereItemsNaPagina(containerEl, tarefas) {
        //remover tudo
        containerEl.innerHTML = '';
        tarefas.forEach(tarefa => tarefa.criaItemsDeListaParaPagina(containerEl))
    }

}

//vetor de tarefas
let tarefas = [
    new Tarefa('Comprar leite', 'compras', false),
    new Tarefa('Escutar chimbinha', 'lazer', true)
];

let containerEl = document.querySelector("#lista-tarefas");

//insere items
Tarefa.insereItemsNaPagina(containerEl, tarefas);

//exercício 02
let buttonIncluirNovaTarefaEl = document.querySelector('#incluir-nova-tarefa');
let novaTarefaNomeEl = document.querySelector('#nova-tarefa-nome');
let novaTareCategoriaEl = document.querySelector('#nova-tarefa-categoria');


buttonIncluirNovaTarefaEl.addEventListener('click', (e) => {

    let novaTarefaNome = novaTarefaNomeEl.value;
    let novaTareCategoria = novaTareCategoriaEl.value;
    novaTarefa = new Tarefa(novaTarefaNome, novaTareCategoria, false);
    tarefas.push(novaTarefa);
    Tarefa.insereItemsNaPagina(containerEl, tarefas);
    novaTarefaNomeEl.value = '';
    // pede o elemento para "roubar o foco" - mover o cursor para dentro dele
    novaTarefaNomeEl.focus()

})