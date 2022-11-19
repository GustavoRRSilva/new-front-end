var botaoMenu = document.querySelector(".menu");
var botaoExcluir = document.querySelector(".fechar");
botaoMenu.addEventListener("click", () => {
  var menu_lateral = document.querySelector(".menu-lateral");
  menu_lateral.classList.add("menu-lateral-ativo");
});
botaoExcluir.addEventListener("click", () => {
  var menu_lateral = document.querySelector(".menu-lateral");
  menu_lateral.classList.remove("menu-lateral-ativo");
});
