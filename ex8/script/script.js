//script de Jquerry para para mostrar/ocultar preço e produto de alguns produtos
//Definindo acoes para cada um dos produtos
$(function(){
$("#b_prod1").click(function(){
$("#d_p1").toggle();
$("#p_p1").toggle();
$("#d_p1").html("<p>Descricao do prod1 </p>");
$("#d_p1").css("color","black" );
$("#p_p1").html("<p> $$10 </p>");
$("#p_p1").css("color","black" );
});
});

$(function(){
    $("#b_prod2").click(function(){
    $("#d_p2").toggle();
    $("#p_p2").toggle();
    $("#d_p2").html("<p>Descricao do prod2 </p>");
    $("#d_p2").css("color","black" );
    $("#p_p2").html("<p> $$20 </p>");
    $("#p_p2").css("color","black" );
    });
});


$(function(){
    $("#b_prod3").click(function(){
    $("#d_p3").toggle();
    $("#p_p3").toggle();
    $("#d_p3").html("<p>Descricao do prod3 </p>");
    $("#d_p3").css("color","black" );
    $("#p_p3").html("<p> $$40 </p>");
    $("#p_p3").css("color","black" );
    });
});


 