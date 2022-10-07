/* Código retirado do vídeo: 
https://www.youtube.com/watch?v=lsRIbW4YCNE&ab_channel=FeatureCode */

const playingClass = 'playing';/*Constante que armazena nela um valor a string a "playing".*/
crashRide = document.getElementById('crash-ride'); 
/* Variável que armazena imagem para fazer efeito.*/
hitHatTop = document.getElementById('hihat-top'); 
/* Variável que armazena imagem para fazer efeito.*/

const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
}; /*Define a constante com "arrow function". A variável que cria animação, para a inclinação do prato com o efeito ".transform" */

const animateHitHatClosed = () => {
    hitHatTop.style.top = '175px';
}; /* Define a constante como "arrow function". A variável muda a posição do prato superior para cima com o comando ".top" colocnado que distância ela ficará do topo.*/

const playSound = e => {
    /* Determina a constante como "arrow function", "e" é o parâmetro da função */
    const keyCode = e.keyCode; /* Função "keycode" como parâmetro para ela mesma*/
    keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
    /* Função que vai ativar o som */
    /* Variável "keyElement" seleciona o elemento "div[data-key" e armazena o valor da tecla, dentro da variável. "keyCode" é a variável que está o valor das teclas. Para isso é colocado dentro do "${}" (interpolação de strings).  */
    if(!keyElement) return;/*  Garante que armazene somente os dados das variáveis que foram escolhidas.*/
    
    
    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    /* Unir a "div" com o elemento "audio" */
    
    /* A constante "audioElement" vai armazenar o "audio[data-key" com o parâmetro que a pessoa quer referenciar com a interpolação de strings. */
    audioElement.currentTime = 0;/* Define quando o áudio vai iniciar */
    audioElement.play(); /* Executa o áudio  */
    
    
    

    switch(keyCode){ /* Determina quando o efeitos "rotate" e "top" devem ser executados. */
        case 69: /* entrada de dados "keyCode". */
        case 82:
            animateCrashOrRide(); /* Essa função é para restringir o efeito ao case 69 e 82  */
            break; /*Não processeguir */
        case 75: /* Nova entrada "keyCode" */
        case 73:
            animateHitHatClosed();
            break;
    }

    keyElement.classList.add(playingClass); 
    /* Efeito de escala.*/ 
    /* "clasList.add" adicionar uma classe ao elemento "playingClass".*/
}

const removeCrashRideTransition = e => {
    if(e.propertyName !== 'transform')  return;
    /*Quando ocorre o efeito de transição , ele vai retornar o nome da propriedade utilizada no parâmetro utilizado no "playSound".*/

    /*Se o efeito for "transform" ele vai retornar com o comando "return", e será removido o efeito, voltando ao estado normal.*/

    e.target.style.transform = 'rotate(-7.3deg) scale(1.5)'; 
    /* "e" é o paramentro da função que está sendo usado na "arrow function" */
    /* A função pega o objeto "target" */
    /* O parametro é o style  */
    /* O "transform" é o efeito que será removido */
} 

const removeHitHatTopTransition = e => {
    if(e.propertyName !== 'top')  return;
    /* Quando ocorre o efeito de transição , ele vai retornar o nome da propriedade*/

    e.target.style.top = '165px'; 
    /* Retorna para essa posição */
}

const removeKeyTransition = e => {
    if(e.propertyName !== 'transform')  return;
    /* Quando ocorre o efeito de transição , ele vai retornar o nome da propriedade utilizada no parâmetro utilizado no "playSound"*/

    e.target.classList.remove(playingClass);
    /* "e" é o paramentro da função que está sendo usado na "arrow function" */
    /* A função pega o objeto "target" */
    /* "classList" com parametro ".remove" para remover a classe "playingClass" */
}

const drumKeys = Array.from(document.querySelectorAll('.key'));
/* Removendo a transição */
/* Criando a array que vai armazenar dentro da variável o atributo "Array.from" que cria um objeto interável */
/* "querySelectorAll" chama todos as divs que tem a classe "key" formando um array para todos elementos que tem essa classe. */
drumKeys.forEach(key => {
    /* será percorrido por toda array */
    key.addEventListener('transitionend', removeKeyTransition);
    /* Chama o evento "transitionend" que coloca fim em um efeito de transition ("removeKeyTransition") depois que ela é concluída*/
})

crashRide.addEventListener('transitionend', removeCrashRideTransition);
/* Removendo os efeitos de transição */
hitHatTop.addEventListener('transitionend', removeHitHatTopTransition);
/* Removendo os efeitos de transição */

window.addEventListener('keydown', playSound);
/* Efeito "keydown" evento disparado quando uma tecla é pressionada 
Função "playSound" que delimita os sons de acordo com o teclado  */