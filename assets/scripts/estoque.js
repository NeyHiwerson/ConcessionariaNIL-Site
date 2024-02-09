var tipoDeVeiculo = "Todos";
var veiculoNovo = true;
var veiculoUsado = true;
var marcaDoVeiculo = "Todas";
var anoInicial = 2010;
var anoFinal = 2024;
var valorMinimo = 20000;//buscar o menor valor no banco
var valorMaximo = 250000;//buscar o maior valor no banco
var kmMinima = 0;
var kmMaxima = 500000;
var corVeiculo = "Todas";

$(document).ready(function () {
    $(".ddpItemTipoDeVeiculo").click(function () {
        atualizarValor("#ddbTipoDeVeiculo", tipoDeVeiculo, $(this).data("value"));
        tipoDeVeiculo = $(this).data("value");
        //console.log("Tipo de Veículo:", tipoDeVeiculo);
        filtroDeBusca();
    });

    $("#ckbNovo, #ckbUsado").change(function () {
        veiculoNovo = $("#ckbNovo").prop("checked");
        veiculoUsado = $("#ckbUsado").prop("checked");
        //console.log("Checkbox Novo " + (veiculoNovo ? "Marcado" : "Desmarcado"));
        //console.log(veiculoNovo)
        //console.log("Checkbox Novo " + (veiculoUsado ? "Marcado" : "Desmarcado"));
        //console.log(veiculoUsado)
        filtroDeBusca();
    });

    $(".ddpItemMarcaDoVeiculo").click(function () {
        atualizarValor("#ddbMarca", marcaDoVeiculo, $(this).data("value"));
        marcaDoVeiculo = $(this).data("value");
        //console.log("Marca do Veículo:", marcaDoVeiculo);
        filtroDeBusca();
    });

    $("#anoInicial, #anoFinal").on("input", capturarValoresAno);

    $("#formValor").submit(function (event) {
        event.preventDefault();
        capturarValores();
    });    

    $("#valorMinimo, #valorMaximo").on("input", function () {
        formatarMoeda(this);
        capturarValores();
    });

    $("#formKm").submit(function (event) {
        event.preventDefault();
        capturarValoresKm();
    });

    $("#kmMinimo, #kmMaximo").on("input", capturarValoresKm);

    $(".ddpItemCor").click(function () {
        event.preventDefault();
        atualizarValor("#ddbCor", corVeiculo, $(this).data("value"));
        corVeiculo = $(this).data("value");
        //console.log("Cor do Veículo:", corVeiculo);
        filtroDeBusca();
    });
});

function atualizarValor(elementoID, variavel, valor) {
    $(elementoID).html(valor);
    variavel = valor;
}

function capturarValoresAno() {
    anoInicial = $("#anoInicial").val();
    anoFinal = $("#anoFinal").val();
    filtroDeBusca();    
}

function capturarValores() {
    // Obtenha os valores brutos (sem formatação) dos campos
    var valorMinimoRaw = $("#valorMinimo").val().replace(/\D/g, '');
    var valorMaximoRaw = $("#valorMaximo").val().replace(/\D/g, '');

    // Converta os valores brutos para números
    valorMinimo = parseFloat(valorMinimoRaw) / 100;
    valorMaximo = parseFloat(valorMaximoRaw) / 100;
    filtroDeBusca();
}

function formatarMoeda(input) {
    var valor = input.value.replace(/\D/g, '');
    var options = { style: 'currency', currency: 'BRL' };
    input.value = new Intl.NumberFormat('pt-BR', options).format(valor / 100);
}

function capturarValoresKm() {
    kmMinima = $("#kmMinimo").val();
    kmMaxima = $("#kmMaximo").val();    
    filtroDeBusca();
}

// Função para limpar os filtros
function limparFiltros() {
    $("#ddbTipoDeVeiculo").text("Todos");
    tipoDeVeiculo = "Todos";
    filtroDeBusca();
}

function filtroDeBusca() {
    var filtros = {
        tipoDeVeiculo: tipoDeVeiculo,
        veiculoNovo: veiculoNovo,
        veiculoUsado: veiculoUsado,
        marcaDoVeiculo: marcaDoVeiculo,
        anoInicial: anoInicial,
        anoFinal: anoFinal,
        valorMinimo: valorMinimo,
        valorMaximo: valorMaximo,
        kmMinima: kmMinima,
        kmMaxima: kmMaxima,
        corVeiculo: corVeiculo
    };

    console.log(filtros);
}