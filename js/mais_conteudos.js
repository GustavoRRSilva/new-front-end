var testa = document.querySelector(".testa");
 var tbody = document.querySelector(".tbody")
var conteudo = {
    conteudos:[
        {
            tag:"Water",
            titulo:"Text Random",
            autor:"/assets/img__autor.svg",
            nome_autor:"Gustavo",
            data_lançamento:"nov,05 2022",
            background:"bg-[url(/assets/imagemConteudoTorneira.svg)]"
        },
        {
            tag:"Nature",
            titulo:"Text Random",
            autor:"/assets/img__autor.svg",
            nome_autor:"Gustavo",
            data_lançamento:"nov,05 2022",
            background:"bg-[url(/assets/imagemConteudoTerra.svg)]",
            
        },
        {
            tag:"Nature",
            titulo:"Text Random",
            autor:"/assets/img__autor.svg",
            nome_autor:"Gustavo",
            data_lançamento:"nov,05 2022",
            background:"bg-[url(/assets/imagemConteudo.svg)]"
        },
        {
            tag:"Water",
            titulo:"Text Random",
            autor:"/assets/img__autor.svg",
            nome_autor:"Gustavo",
            data_lançamento:"nov,05 2022",
            background:"bg-[url(/assets/imagemConteudoOceano.svg)]"
            
        }
    ]
}
window.onload = function criaMaisConteudos(){

for (let i = 0; i < 4; i++) {
    var conteudinho= '<p class="Bg__frase frase__conteudo dentro__conteudo '+conteudo.conteudos[i].tag+'">'+ conteudo.conteudos[i].tag +"</p>";

    conteudinho += '<h2 class="titulo__conteudo dentro__conteudo">'+ conteudo.conteudos[i].titulo +"</h2>";

    conteudinho +='<img src = "'+conteudo.conteudos[i].autor +'" alt class="autor__conteudo dentro__conteudo">'+'</img>';

    conteudinho += '<p class="nome_autor_conteudo">'+ conteudo.conteudos[i].nome_autor +"</p>";
    conteudinho+= '<div class="flex relogio">'+'<img src="/assets/img__relogio.svg" alt="" class="relogio__conteudo dentro__conteudo relogio__teste">'+'<p class="data__hora__conteudo ">'+conteudo.conteudos[i].data_lançamento+'</div>';
    conteudoCompleto = '<a href="#" class="imagem__conteudo '+ conteudo.conteudos[i].background +'">' + conteudinho + '</a>';
    console.log(conteudinho)
    $(".testa").append(conteudoCompleto)
    
    //<p class="Bg__frase frase__conteudo dentro__conteudo">Nature</p><h2 class="titulo__conteudo dentro__conteudo">Text Random</h2><img src = "/assets/img__autor.svg" alt class="autor__conteudo dentro__conteudo"></img><p class="nome_autor_conteudo">Gustavo</p><div class="flex relogio"><img src="/assets/img__relogio.svg" alt="" class="relogio__conteudo dentro__conteudo relogio__teste"><p class="data__hora__conteudo ">nov,05 2022</div>
}
}



