const botaoUm = document.querySelector("#botao1")
const botaoDois = document.querySelector("#botao2")
const botaoTres = document.querySelector("#botao3")
const botaoQuatro = document.querySelector("#botao4")
const botaoCinco = document.querySelector("#botao5")
const botaoSeis = document.querySelector("#botao6")
const botaoSete = document.querySelector("#botao7")
const botaoOito = document.querySelector("#botao8")
const botaoNove = document.querySelector("#botao9")
const botaoDez = document.querySelector("#botao10")


let botaoAudioIngles = document.querySelector("#botao-audio-ingles")
let botaoAudioPortugues = document.querySelector("#botao-audio-portugues")
 
// DECLARAÇÃO DOS BOTÕES ----------------------------

const modal = document.querySelector("#modal")
const blur = document.querySelector(".blur")
const caixaCinza = document.querySelector(".bloco-cinza")
const botaoSeta = document.querySelector(".circulo")
let palavraIngles = document.querySelector(".palavra-en")
let palavraPortugues = document.querySelector(".palavra-pt")
let definicaoIngles = document.querySelector(".definicao-en")
let definicaoPortugues = document.querySelector(".definicao-pt")
let trechoConto = document.querySelector(".trecho")


let audioIngles = new Audio('audios/desire.mp3')
let audioPortugues = new Audio('audios/desejo.mp3')



// PARA APARECER O PRIMEIRO MODAL
botaoUm.addEventListener('click', () =>{
    // e.proventDefault();

    audioIngles = new Audio('audios/desire.mp3')
    audioPortugues = new Audio('audios/desejo.mp3')

    modal.style.visibility = 'visible'
    blur.style.visibility = 'visible'
    palavraIngles.textContent = "Desire"
    palavraPortugues.textContent = "Desejo"
    definicaoIngles.textContent = "A strong feeling of wanting to have something or wishing for something to happen."
    definicaoPortugues.textContent = "Aspiração, querer, vontade."
    trechoConto.innerHTML = "Por fim, como eu disse, já não sinto mais <b>desejo</b> nenhum de reatar qualquer tipo de fragmento de alguma relação familiar que nós chegamos a ter" 
    
  
})

// EVENTO PARA O MODAL DESAPARECER (independente de qual botão tenha sido apertado)
modal.addEventListener('click', () =>{
    
    modal.style.visibility = 'hidden'
    blur.style.visibility = 'hidden'

})
// --------------------------------------

// PARA APARECER O SEGUNDO MODAL
botaoDois.addEventListener('click', () =>{

    audioIngles = new Audio('audios/nowadays.mp3')
    audioPortugues = new Audio('audios/hoje_em_dia.mp3')

    modal.style.visibility = 'visible'
    blur.style.visibility = 'visible'
    palavraIngles.textContent = "Nowadays"
    palavraPortugues.textContent = "Hoje em dia"
    definicaoIngles.textContent = "At the present time, in contrast with the past"
    definicaoPortugues.textContent = "Nos dias que correm; na atualidade, no presente; hoje."
    trechoConto.innerHTML = "Sabe, <b>hoje em dia</b> eu estou sim, bem melhor, conheci uma pessoa que diz que a vida é um moinho, trituraria meus sonhos e, quando eu percebesse, já estaria à beira do abismo."
    

})

// PARA APARECER O TERCEIRO MODAL
botaoTres.addEventListener('click', () =>{

    audioIngles = new Audio('audios/slang.mp3')
    audioPortugues = new Audio('audios/giria.mp3')

    modal.style.visibility = 'visible'
    blur.style.visibility = 'visible'
    palavraIngles.textContent = "Slang"
    palavraPortugues.textContent = "Gíria"
    definicaoIngles.textContent = "A type of language that consists of words and phrases that are regarded as very informal, are more common in speech than writing, and are typically restricted to a particular context or group of people."
    definicaoPortugues.textContent = "Linguagem informal com vocabulário rico em expressões metafóricas, jocosas, elípticas, usada inicialmente por um determinado grupo, mas que pode se estender a outros, passando a fazer parte do uso corrente."
    trechoConto.innerHTML = "Lembra da <b>gíria</b> que tu me ensinaste a falar? Cuidar para não ‘voar como Ícaro’...pois é, queime como suas asas próximas ao sol, Ícaro.”"
    
})

//PARA APARECER O QUARTO MODAL
botaoQuatro.addEventListener('click', () =>{

    audioIngles = new Audio('audios/entirely.mp3')
    audioPortugues = new Audio('audios/totalmente.mp3')

    modal.style.visibility = 'visible'
    blur.style.visibility = 'visible'
    palavraIngles.textContent = "Entirely"
    palavraPortugues.textContent = "Totalmente"
    definicaoIngles.textContent = "Completely (often used for emphasis)."
    definicaoPortugues.textContent = "De modo completo."
    trechoConto.innerHTML = "Com o coração mais pesado e <b>totalmente</b> despedaçado do mundo, ódio e rancor prestes a esvair da alma"
})

//PARA APARECER O QUINTO MODAL
botaoCinco.addEventListener('click', () =>{

    audioIngles = new Audio('audios/quickly.mp3')
    audioPortugues = new Audio('audios/rapidamente.mp3')

    modal.style.visibility = 'visible'
    blur.style.visibility = 'visible'
    palavraIngles.textContent = "Quickly"
    palavraPortugues.textContent = "Rapidamente"
    definicaoIngles.textContent = "At a fast speed; rapidly."
    definicaoPortugues.textContent = "Com rapidez, velocidade; rápido, velozmente."
    trechoConto.innerHTML = "Isso mesmo, pois no momento que tu me jogaste ao céu só para me ver cair <b>rapidamente</b> até o chão, o moinho já girava com os ventos fortes que naquele dia batiam no meu rosto"
    
})

//PARA APARECER O SEXTO MODAL
botaoSeis.addEventListener('click', () =>{

    audioIngles = new Audio('audios/wrinkly.mp3')
    audioPortugues = new Audio('audios/enrugada.mp3')

    modal.style.visibility = 'visible'
    blur.style.visibility = 'visible'
    palavraIngles.textContent = "Wrinkly"
    palavraPortugues.textContent = "Enrugada"
    definicaoIngles.textContent = "Having many lines or folds. "
    definicaoPortugues.textContent = "Que tem ruga(s); envelhecido."
    trechoConto.innerHTML = "Quem hoje passa esse sofrimento que me parece ser eterno, tropeçando na própria barba, com a pele <b>enrugada</b> e que todos se divertem vendo-o fracassar"
    
})

//PARA APARECER O SETIMO MODAL
botaoSete.addEventListener('click', () =>{

    audioIngles = new Audio('audios/worthy.mp3')
    audioPortugues = new Audio('audios/digno.mp3')

    modal.style.visibility = 'visible'
    blur.style.visibility = 'visible'
    palavraIngles.textContent = "Worthy"
    palavraPortugues.textContent = "Digno"
    definicaoIngles.textContent = "Having or showing the qualities or abilities that merit recognition in a specified way."
    definicaoPortugues.textContent = "Que está em conformidade; apropriado, conveniente, adequado."
    trechoConto.innerHTML = "Por muito tempo eu me senti desolada e achei que não era <b>digna</b> de receber o amor de um pai, me culpei durante anos da minha vida"

    
})

//PARA APARECER O OITAVO MODAL
botaoOito.addEventListener('click', () =>{

    audioIngles = new Audio('audios/rotten.mp3')
    audioPortugues = new Audio('audios/podre.mp3')

    modal.style.visibility = 'visible'
    blur.style.visibility = 'visible'
    palavraIngles.textContent = "Rotten"
    palavraPortugues.textContent = "Podre"
    definicaoIngles.textContent = "Suffering from decay. "
    definicaoPortugues.textContent = "Que se encontra em estado de decomposição; deteriorado."
    trechoConto.innerHTML = "Como pode um homem bombear sangue e manter-se vivo naquele estado (<b>podre</b> e cansado)"
    
})
//PARA APARECER O NONO MODAL
botaoNove.addEventListener('click', () =>{

    audioIngles = new Audio('audios/disgusting.mp3')
    audioPortugues = new Audio('audios/nojento.mp3')

    modal.style.visibility = 'visible'
    blur.style.visibility = 'visible'
    palavraIngles.textContent = "Disgusting"
    palavraPortugues.textContent = "Nojento"
    definicaoIngles.textContent = "Arousing revulsion or strong indignation."
    definicaoPortugues.textContent = "Que provoca nojo, repugnância; asqueroso, repulsivo, nojoso."
    trechoConto.innerHTML = "Não há mais nada de nesse mundo que me faça deixar de sentir o <b>nojo</b> que eu sinto por ti, tu és nojento!"
    
})
//PARA APARECER O DECIMO MODAL
botaoDez.addEventListener('click', () =>{

    audioIngles = new Audio('audios/awkward.mp3')
    audioPortugues = new Audio('audios/constrangedor.mp3')

    modal.style.visibility = 'visible'
    blur.style.visibility = 'visible'
    palavraIngles.textContent = "Awkward"
    palavraPortugues.textContent = "Constrangedor"
    definicaoIngles.textContent = "Causing or feeling embarrassment or inconvenience. "
    definicaoPortugues.textContent = "Que ou o que é incômodo, embaraçoso, inconveniente."
    trechoConto.innerHTML = "Tudo o que eu vi aquele dia foi horroroso e <b>constrangedor</b>, todos sabiam e perceberam a dor que eu senti ao olhar no estádio;"
    
})


// PARA APARECER A CAIXA DO TEXTO ABAIXO
botaoSeta.addEventListener('click', () =>{

    caixaCinza.style.visibility = 'visible'
    
})

caixaCinza.addEventListener('click', () =>{

    caixaCinza.style.visibility = 'hidden'
})


// para criar um elemento eu crio uma variável, atribuo ao document.createElement(aqui vai o elemento, pode ser um h1, span, div etc)

// para o elemento aparecer na tela eu atribuo o elemento ao .appendChild



// --------------------------------------------------------------------------------------------------------------


botaoAudioIngles.addEventListener('mouseover', () =>{
    audioIngles.load();
    audioIngles.play();
    
})
botaoAudio.addEventListener('mouseout', () =>{
    audioIngles.pause();

})


botaoAudioPortugues.addEventListener('mouseover', () =>{
    audioPortugues.load();
    audioPortugues.play();
    
})

botaoAudio.addEventListener('mouseout', () =>{
    audioPortugues.pause();

})
