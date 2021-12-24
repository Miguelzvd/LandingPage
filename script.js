function loaded() {
  let but = document.getElementsByClassName("Conteudo-principal-escrito-botao")[0];

  let img_ = document.getElementById("imagem");

  console.log(but);

  but.onmouseover = mudarcor1;
  but.onmouseout = mudarcor2;
  
  img_.onmouseover =  mudarcorImg1;
  img_.onmouseout =  mudarcorImg2;
}

function mudarcor1() {
  this.style = "background-color:#110337; cursor:pointer; color:#D55833;box-shadow: 4px 5px 4px #D55833";
}
function mudarcor2() {
  this.style = "background-color:#D55833";
}
function mudarcorImg1() {
    this.style = "cursor:pointer;box-shadow: 4px 5px 4px #D55833";
  }
  function mudarcorImg2() {
    this.style = "background-color:#D55833";
  }