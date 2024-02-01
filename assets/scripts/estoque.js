$(document).ready(function(){
    $(".dropdown-item").click(function(){
        var selectedOption = $(this).data("value");
        $("#ddbTipoDeVeiculo").html(selectedOption);
    });
});