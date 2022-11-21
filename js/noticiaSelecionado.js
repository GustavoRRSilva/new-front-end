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
    {
      titulo: "TITULO5",
      tituloNoticia: "Brasil e o descaso com a natureza",
      p1: "A seca é um problema que acontece infelizmente até com certa recorrência no Brasil, além de ser uma grande consequência climática, também faz acontecer várias dificuldades sociais para pessoas que habitam regiões que acaba sendo comprometida com esse tipo de situação. Ela também provoca a falta de recursos econômicos, gerando fome e miséria principalmente em regiões como a do sertão. Várias vezes, as pessoas precisam andar durante horas, em meio ao sol e calor forte, para pegar água, muitas vezes ela está suja e contaminada devido as condições. Com uma alimentação precária e consumo de água de péssima qualidade, os habitantes do sertão nordestino acabam sendo vítimas de muitas doenças.",
      p2: "Uma das piores secas que já ocorreu no Brasil inclusive foi a seca que acometeu o sertão nordestino no início de 2012, trouxe diversos prejuízos para a economia local, incluindo a grande perda na pecuária e em produtos agrário como o milho e o feijão, já na pecuária fez com que muitos gados viessem a óbito graças a falta de água.",
      p3: "",
    },
    {
      titulo: "TITULO6",
      tituloNoticia: "Problemas enfrentados com a seca",
      p1: "O meio ambiente tem diversas importâncias diferentes para a população e que impactam de maneira muito grandiosa a vida dos seres humanos, afinal é de onde tiram os recursos essenciais para a manutenção da vida na terra, e os problemas ambientais já começam a causar um desequilíbrio nesse sistema.",
      p2: "O Brasil sofreu muito e sofre com problemas causados por sua própria população, seja ela em todos os ambitos, desde ao menino que joga um canudo plástico ou um saco de salgadinho em rios e mares, até aos madeireiros que provocam desmatamento e fazem queimadas na Amazônia e em regiões florestais no território brasileiro. O pior de tudo em cima disso é a lentidão que esses casos são tratados no Brasil pelo governo, uma crise ambiental instaurada ao longo de vários anos em meio a esse descaso. Um número impactante em meio a isso, é que os números do desmatamentos e queimadas só fazem crescer ao longo do tempo no Brasil.",
      p3: "",
    },
    {
      titulo: "TITULO7",
      tituloNoticia: "Maiores fontes hídricas do Brasil",
      p1: "Sem dúvidas alguma é claro que a maior fonte hídrica do Brasil se encontra no norte, na região amazônica, cerca de 80% da água superficial se encontram na região que por outro lado não apresenta tanta demanda de uso por apresentar uma baixa densidade demográfica. Enquanto isso temos diversos municípios no nordeste e em algumas regiões específicas como em Minas Gerais que sofrem bastante com a falta desse recursos, enfrentando vários períodos longos de estiagem.",
      p2: "O norte também tem outras fontes hídricas bastante importantes, como o rio Tapajós, Rio Negro, Solimões e Madeira. Sem contar também o aquifero de alter do chão que existe na região, que é um dos maiores reservatórios de água subterrâneo não só do Brasil como do mundo. Já existem até algumas pesquisas realizadas que chegaram a conclusão que todos os estados do norte são considerados abundantes no quesito de recursos hídricos, gerando pra cada um de seus habitantes um enorme volume de água.",
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
