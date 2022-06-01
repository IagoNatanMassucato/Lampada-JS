const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const restaura = document.getElementById ( 'restaura' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
    //Dentro do caminho da imagem da lampada tiver a palavra 'quebrada', retorna true->
    //textContent é a escrita do elemento, == comparação e = atribuição->
}

function lampOn () {
    if ( !isLampBroken () ) { //Se for diferente de quebrada, muda o src da lâmpada->
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

function lampRestaura () {
    lamp.src = './img/desligada.jpg';
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );//Evento mouse em cima do elemento->
lamp.addEventListener ( 'mouseleave', lampOff );//Evento tira o mouse do elemento->
lamp.addEventListener ( 'dblclick', lampBroken );//Evento dois click->
restaura.addEventListener ( 'click', lampRestaura );

