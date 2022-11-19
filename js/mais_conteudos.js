var testa = document.querySelector(".testa");
 var tbody = document.querySelector(".tbody")
var conteudo = {
    conteudos:[
        {
            tag:"Water",
            idNoticia:"/noticia/?id=TITULO1",
            titulo:"O que é crise Hidrica",
            autor:"/assets/gustavoImg.svg",
            nome_autor:"Gustavo",
            data_lançamento:"nov,05 2022",
            background:"bg-[url(/assets/imagemConteudoTorneira.svg)]"
        },
        {
            tag:"Nature",
            idNoticia:"/noticia/?id=TITULO",
            titulo:"Qual a importância da natureza?",
            autor:"/assets/viniImg.svg",
            nome_autor:"Vinicius",
            data_lançamento:"nov,05 2022",
            background:"bg-[url(/assets/imagemConteudoTerra.svg)]",
            
        },
        {
            tag:"Nature",
            idNoticia:"/noticia/?id=TITULO3",
            titulo:"Porque a amazônia é importante?",
            autor:"/assets/gustavoImg.svg",
            nome_autor:"Gustavo",
            data_lançamento:"nov,05 2022",
            background:"bg-[url(/assets/amazonia.webp)]"
        },
        {
            tag:"Water",
            idNoticia:"/noticia/?id=TITULO4",
            titulo:"Como é o cenario brasileiro diante das crises hidricas?",
            autor:"/assets/veigaImg.svg",
            nome_autor:"Guilherme",
            data_lançamento:"nov,05 2022",
            background:"bg-[url(/assets/crisehidrica.webp)]"
            
        }
    ]
}
window.onload = function criaMaisConteudos(){

for (let i = 0; i < 4; i++) {
    scroll.scroll(100,0),
    setTimeout(voltar,2000)


    var conteudinho= '<p class="Bg__frase frase__conteudo dentro__conteudo '+conteudo.conteudos[i].tag+'">'+ conteudo.conteudos[i].tag +"</p>";

    conteudinho += '<h2 class="titulo__conteudo dentro__conteudo">'+ conteudo.conteudos[i].titulo +"</h2>";

    conteudinho +='<div class="flex autorCompleto justify-center items-center gap-x-1"><img src = "'+conteudo.conteudos[i].autor +'" alt class="autor__conteudo dentro__conteudo  ml-0 ">'+'</img>';

    conteudinho += '<p class="nome_autor_conteudo">'+ conteudo.conteudos[i].nome_autor +"</p></div>";
    conteudinho+= '<div class="flex relogio ">'+'<img src="/assets/img__relogio.svg" alt="" class="relogio__conteudo dentro__conteudo relogio__teste">'+'<p class="data__hora__conteudo ">'+conteudo.conteudos[i].data_lançamento+'</div>';
    conteudoCompleto = '<a href="'+conteudo.conteudos[i].idNoticia+ '"class="imagem__conteudo '+ conteudo.conteudos[i].background +'">' + conteudinho + '</a>';
    console.log(conteudinho)
    $(".testa").append(conteudoCompleto)
    
  
}
}



function voltar (){
    scroll.scroll(0,0)
 
}