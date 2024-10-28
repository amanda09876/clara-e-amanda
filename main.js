function criaCartao (categoria, pergunta, resposta){ 
let container = document.getElementById('container');
let cartao = document.createElement('article');
cartao.className = 'cartao';
cartao.innerHTML =`
<div class="conteudo-cartao">
    <h3> ${categoria}</h3>
    <div class="pergunta-cartao">
    <p> ${pergunta}</p>
</div>
    <div class="respostas-cartao">
    <p>${resposta}</p>
    </div>

    let respostaEstaviivel = false;
    
    function viraCartao (){ 
     respostaEstaviivel = !respostasEstavisivel);
     cartao.classiList.toggle('active', respostasEstaVisivel);
}

`
container.appendChild(cartao)
}
