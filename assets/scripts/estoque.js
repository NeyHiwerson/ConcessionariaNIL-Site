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
const veiculosPorPagina = 12;
var paginaAtual = 1;
var veiculos = [];
var veiculosFiltrados = [];
const urlLocal = "http://localhost:3000";
const complemento = "/estoque";

$(document).ready(async function () {
    $(".ddpItemTipoDeVeiculo").click(function () {
        atualizarValor("#ddbTipoDeVeiculo", tipoDeVeiculo, $(this).data("value"));
        tipoDeVeiculo = $(this).data("value");
        filtroDeBusca();
    });

    $("#ckbNovo, #ckbUsado").change(function () {
        veiculoNovo = $("#ckbNovo").prop("checked");
        veiculoUsado = $("#ckbUsado").prop("checked");
        filtroDeBusca();
    });

    $(".ddpItemMarcaDoVeiculo").click(function () {
        atualizarValor("#ddbMarca", marcaDoVeiculo, $(this).data("value"));
        marcaDoVeiculo = $(this).data("value");
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
        filtroDeBusca();
    });

    // Consumir a API usando jQuery
    try {
        // Use o await para aguardar a conclusão da requisição AJAX
        const data = await $.ajax({
            url: urlLocal + complemento,
            type: "GET",
            dataType: "json"
        });

        // Certifique-se de que 'data' é um array
        if (Array.isArray(data)) {
            // Adicione os dados da API ao array 'veiculos'
            veiculos = data;
        } else {
            console.error("Os dados da API não são um array.");
        }
        } catch (error) {
        console.error("Erro na requisição da API:", error.statusText);
        }

    renderVeiculos(veiculos);
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
    $("#ckbNovo").prop("checked", true);
    veiculoNovo = true;
    $("#ckbUsado").prop("checked", true);
    veiculoUsado = true;
    $("#ddbMarca").text("Todas");
    marcaDoVeiculo = "Todas";
    $("#anoInicial").val("2010");
    anoInicial = 2010;
    $("#anoFinal").val("2024");
    anoFinal = 2024;
    $("#valorMinimo").val("20000");
    valorMinimo = 20000;
    $("#valorMaximo").val("250000");
    valorMaximo = 250000;
    $("#kmMinimo").val("0");
    kmMinima = 0;
    $("#kmMaximo").val("200000");
    kmMaxima = 200000;
    $("#ddbCor").text("Todas");
    corVeiculo = "Todas";

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
    console.log(veiculos);
    // Filtrar os veículos com base nos filtros

    //filtro tipo de veiculo
    if (tipoDeVeiculo === "Todos") {
        // Se "todos" for selecionado, retornar todos os veículos
        veiculosFiltrados = veiculos;
    } else {
        // Filtrar por tipo
        veiculosFiltrados = veiculos.filter(function(veiculo) {
            return veiculo.tipo == tipoDeVeiculo.toLowerCase();
        });
    }

    //filtro veiculo novo
    if (!veiculoNovo) {
        // Filtrar por tipo
        veiculosFiltrados = veiculosFiltrados.filter(function(veiculo) {
            return veiculo.quilometragem > 0;
        });
    }

    // Exibir os veículos filtrados
    console.log(veiculosFiltrados);

    renderVeiculos(veiculosFiltrados);

}

function renderVeiculos(veiculos) {

    $("#container-veiculos").empty();

    const startIndex = (paginaAtual - 1) * veiculosPorPagina;
    const endIndex = startIndex + veiculosPorPagina;
    const veiculosDaPagina = veiculos.slice(startIndex, endIndex);

    veiculosDaPagina.forEach(element => {
        var cardHtml = `
        <div class="custom-col col-xs-12 col-md-6 col-lg-4 pt-2 px-1">
            <div class="card h-100">
                <img src="${element.link_1}" class="card-img-top" alt="imagem do ">
                <div class="card-body">
                    <h5 class="card-title">${element.nome}</h5>
                    <span class="card-text potencia custom-small-text">${element.motor}</span>
                    <span class="card-text motor custom-small-text">${element.valvulas}</span>
                    <span class="card-text cambio custom-small-text">${element.combustivel}</span>
                    <span class="card-text cambio custom-small-text">${element.cambio}</span>
                    <p class="card-text valor custom-medium-text pt-3 mb-1">Valor: ${element.valor}</p>
                    <span class="card-text anoModelo custom-small-text">${element.ano_fabricacao}</span>
                    <span class="card-text custom-small-text">/</span>
                    <span class="card-text anoModelo custom-small-text">${element.ano_modelo}</span>
                    <p class="card-text text-right quilometragem">${element.quilometragem} km</p>
                    <div class="container text-center">
                        <button type="button" class="btn btn-primary btn-sm custom-small-text" onclick="veiculoMaisInformacoes()">Mais informações</button>
                    </div>
                    <hr class="my-3"> <!-- Linha separadora -->
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="card-text cidadeDoVeiculo custom-small-text">${element.cidade}</span>
                    <span class="card-text estadoDoVeiculo custom-small-text">${element.estado}</span>
                </div>
            </div>
        </div>
        `;

        $("#container-veiculos").append(cardHtml);
    });

    renderizarBotoes();

}

function renderizarBotoes() {
    $("#container-buttons").empty();

    const totalPages = Math.ceil(veiculos.length / veiculosPorPagina);

    // Botão Anterior
    const btnAnterior = `<button type="button" id="btnAnt" class="btn btn-primary" onclick="paginaAnterior()">Anterior</button>`;

    // Botão Próximo
    const btnProximo = `<button type="button" id="btnProx" class="btn btn-primary" onclick="proximaPagina()">Próximo</button>`;

    // Adicionar os botões à sua página
    $("#container-buttons").append(`<div class="text-center">${btnAnterior} ${btnProximo}</div>`);

    $("#btnAnt").prop("enabled", true);
    $("#btnProx").prop("enabled", true);

    if(totalPages <= 1) {
        $("#btnAnt").prop("disabled", true);
        $("#btnProx").prop("disabled", true);
    }else if(paginaAtual === 1) {
        $("#btnAnt").prop("disabled", true);
    }else if(paginaAtual === totalPages) {
        $("#btnProx").prop("disabled", true);
    }
}

 function paginaAnterior() {
    if (paginaAtual > 1) {
        paginaAtual--;
        renderVeiculos(veiculos);
    }
}

function proximaPagina() {
    const totalPages = Math.ceil(veiculos.length / veiculosPorPagina);
    if (paginaAtual < totalPages) {
        paginaAtual++;
        renderVeiculos(veiculos);
    }
}

function veiculoMaisInformacoes() {
    // Lógica para mais informações do veículo
    alert("Mais informações do veículo");
}