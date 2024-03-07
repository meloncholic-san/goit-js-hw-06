const fontSizeRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
function fontSizeControlHandler(){
    textRef.style.fontSize = `${fontSizeRef.value}px`;
}

fontSizeRef.addEventListener('input', fontSizeControlHandler);