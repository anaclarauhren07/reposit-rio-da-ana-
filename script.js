document.addEventListener('DOMContentLoadedDOMContent', function(){
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');

    let tamanhoatualfonte = 1;

    aumentaFonteBotao.addEventListener('click', function(){
        tamanhoatualfonte += 0.1;
        document.body.style.fontSize = '${tamanhoatualfonte}rem'