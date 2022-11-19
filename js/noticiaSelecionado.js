var conteudo = {
  conteudos: [
    {
      titulo: "TITULO1",
      tituloNoticia: "O que é crise Hidrica?",
      linkVideo: "",
      p1: "s",
      p2: "s",
      p3: "s",
    },
    {
      titulo: "TITULO2",
      tituloNoticia: "Qual a importância da natureza?",
      p1: "",
      p2: "",
      p3: "",
    },
    {
      titulo: "TITULO3",
      tituloNoticia: "Porque a amazônia é importante?",
      p1: "",
      p2: "",
      p3: "",
    },
    {
      titulo: "TITULO4",
      tituloNoticia: "Como é o cenario brasileiro diante das crises hidricas?",
      p1: "",
      p2: "",
      p3: "",
    },
  ],
};
const urlParams = new URLSearchParams(window.location.search);
const id_usuario = urlParams.get("id");

conteudo = conteudo.conteudos.filter((obj) => obj.titulo == id_usuario)[0];
console.log(conteudo);
var titulo = (document.querySelector(".titulo-noticia").textContent =
  conteudo.tituloNoticia);
var p1 = (document.querySelector(".p1").textContent = conteudo.p1);
var p2 = (document.querySelector(".p2").textContent = conteudo.p2);
var p3 = (document.querySelector(".p3").textContent = conteudo.p3);
