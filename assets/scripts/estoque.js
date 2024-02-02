$(document).ready(function(){
    $(".ddpItemTipoDeVeiculo").click(function(){
        var selectedOption = $(this).data("value");
        $("#ddbTipoDeVeiculo").html(selectedOption);
    });
});

$(document).ready(function(){
    $(".ddpItemMarcaDoVeiculo").click(function(){
        var selectedOption = $(this).data("value");
        $("#ddbMarca").html(selectedOption);
    });
});

function formatarMoeda(input) {
    var valor = input.value.replace(/\D/g, '');
    var options = { style: 'currency', currency: 'BRL' };
    input.value = new Intl.NumberFormat('pt-BR', options).format(valor / 100);
}

$(document).ready(function(){
    $(".ddpItemCor").click(function(){
        var selectedOption = $(this).data("value");
        $("#ddbCor").html(selectedOption);
    });
});

// Função para limpar os filtros
function limparFiltros() {
    // Limpe os valores dos campos de filtro aqui
    document.getElementById('ddbTipoDeVeiculo').innerText = 'Todos';
    // ... (limpe os outros campos conforme necessário)
}

