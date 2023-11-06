const personagens = document.querySelectorAll('.personagem')

personagens.forEach(personagem => {
personagem.addEventListener('mouseenter', () =>{

    if(window.innerWidth > 450){
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    let personagemSelecionado = document.querySelector('.selecionado')
    personagemSelecionado.classList.remove('selecionado')

    personagem.classList.add('selecionado')

    let personagemGrandeImagem = document.querySelector('.personagem-grande')

    let idPersonagem = personagem.attributes.id.value
    personagemGrandeImagem.src = `imagens/card-${idPersonagem}.png`;

    let nomePersonagem = document.getElementById('nome-personagem')
    nomePersonagem.innerText = personagem.getAttribute('data-name')

    let DescPersonagem = document.getElementById('descricao-personagem')
    DescPersonagem.innerText = personagem.getAttribute('data-description')


    })
})




