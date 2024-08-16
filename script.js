console.log(contentsHtmlJson);
console.log(contentsCssJson);

// HTML
// ÁREA QUE CRIA OS CONTEUDOS DENTRO DA BOX CONFORME ADICIONADO NO JSON
contentsHtmlJson.map((item, index)=>{
    let contentItem = document.querySelector('.models .conteudos-html').cloneNode(true);

    document.querySelector('.box-area').append(contentItem);

    contentItem.querySelector('.titulo').innerHTML = item.titulo
    contentItem.querySelector('.item-desc').innerHTML = item.descricao
    contentItem.querySelector('.img-content img').src = item.img
});

// CSS
// ÁREA QUE CRIA OS CONTEUDOS DENTRO DA BOX CONFORME ADICIONADO NO JSON

contentsCssJson.map((item, index)=>{
    let contentItem = document.querySelector('.models .conteudos-html').cloneNode(true);

    document.querySelector('.box-area.css').append(contentItem);

    contentItem.querySelector('.titulo').innerHTML = item.titulo
    contentItem.querySelector('.item-desc').innerHTML = item.descricao
    contentItem.querySelector('.img-content img').src = item.img
});

// JavaScript
// ÁREA QUE CRIA OS CONTEUDOS DENTRO DA BOX CONFORME ADICIONADO NO JSON

contentsJavaScriptJson.map((item, index)=>{
    let contentItem = document.querySelector('.models .conteudos-html').cloneNode(true);

    document.querySelector('.box-area.js').append(contentItem);

    contentItem.querySelector('.titulo').innerHTML = item.titulo
    contentItem.querySelector('.item-desc').innerHTML = item.descricao
    contentItem.querySelector('.img-content img').src = item.img
});