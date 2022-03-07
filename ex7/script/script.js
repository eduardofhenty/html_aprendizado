function visualizardados() {
    //declaracao das variaveis com base nos valores de id
  var nome=document.getElementById("nome_id").value;
  var mail=document.getElementById("mail_id").value;
  var data=document.getElementById("data_id").value;
  //Escreve alguns dados no rodape
  document.getElementById("m_nome").innerHTML =nome;
  document.getElementById("m_mail").innerHTML =mail;
  document.getElementById("m_data").innerHTML =data;
//Verifica a validade dos dados
var obj_nome=document.getElementById("nome_id");
var obj_mail=document.getElementById("mail_id");
var obj_data=document.getElementById("data_id");
if(!obj_nome.checkValidity () ){
 //document.getElementById("msg_nome").innerHTML="Nome invalido";
 document.getElementById("msg_nome").innerHTML=obj_nome.validationMessage ;
 document.getElementById("msg_nome").style.color="red";
}else{
    document.getElementById("msg_nome").innerHTML="Ok";
}

if(!obj_mail.checkValidity () ){
    document.getElementById("msg_mail").innerHTML="Email invalido";
    document.getElementById("msg_mail").style.color="red";
}
 
if(!obj_data.checkValidity () ){
    document.getElementById("msg_data").innerHTML="Data invalida";
    document.getElementById("msg_data").style.color="red";
}



}//Fim da função