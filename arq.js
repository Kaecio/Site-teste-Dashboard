
var nome ='a';
var senha ='1'
function validar(){
  var nome = formulario.nome.value;
  var senha =formulario.senha.value;

  if(nome =="" || senha==""){
         alert( 'nome ou senha em branco')
         window.location.href = 'index.html';
         return false;
  }if(nome=="Kaecio" && senha=="12345"){
      window.location.href = 'principal.html';
       return false;
  }else{
    alert('senha ou nome incorreto');
         window.location.href = 'index.html';
         return false;
  }
  
}



