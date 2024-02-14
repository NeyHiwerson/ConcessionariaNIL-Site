var tipoDeVeiculo = "Todos";
var veiculoNovo = true;
var veiculoUsado = true;
var marcaDoVeiculo = "Todas";
var anoInicial = 2010;
var anoFinal = 2024;
var valorMinimo = 10000;//buscar o menor valor no banco
var valorMaximo = 250000;//buscar o maior valor no banco
var kmMinima = 0;
var kmMaxima = 200000;
var corVeiculo = "Todas";
const veiculosPorPagina = 12;
var paginaAtual = 1;
var veiculos = [];
var veiculosFiltrados = [];
var veiculosFiltrados1 = [];
var veiculosFiltrados2 = [];
var veiculosFiltrados3 = [];
var marcas = []
const urlLocal = "https://wild-lion-khakis.cyclic.app";
const complemento = "/estoque";

$(document).ready(async function () {
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


    $(".ddpItemTipoDeVeiculo").click(function () {
        atualizarValorTipoDeVeiculo("#ddbTipoDeVeiculo", tipoDeVeiculo, $(this).data("value"));
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


    renderVeiculos(veiculos);
});

function atualizarValorTipoDeVeiculo(elementoID, variavel, valor) {
    $(elementoID).html(valor);
    variavel = valor;
}

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

function formatarValor(valor) {
    var valorFormatado = valor.replace(/\D/g, '');
    var options = { style: 'currency', currency: 'BRL' };
    return new Intl.NumberFormat('pt-BR', options).format(valorFormatado / 100);
}

function capturarValoresKm() {
    kmMinima = parseInt($("#kmMinimo").val()) || 0;
    kmMaxima = parseInt($("#kmMaximo").val()) || 200000;
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
    $("#valorMinimo").val("10000");
    valorMinimo = 10000;
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

    //filtro veiculo novo e usado
    if (veiculoNovo && veiculoUsado) {
        // Filtrar por tipo
        veiculosFiltrados = veiculosFiltrados.filter(function(veiculo) {
            return veiculo.quilometragem >= 0;
        });
    }else if(veiculoNovo && !veiculoUsado){
        veiculosFiltrados = veiculosFiltrados.filter(function(veiculo) {
            return veiculo.quilometragem == 0;
        });
    }else if(!veiculoNovo && veiculoUsado){
        veiculosFiltrados = veiculosFiltrados.filter(function(veiculo) {
            return veiculo.quilometragem > 0;
        });
    }else{
        veiculosFiltrados = veiculosFiltrados.filter(function(veiculo) {
            return veiculo.quilometragem < 0;
        });
    }

    //neste ponto eu preciso filtrar as marcas e inserir as opçoes no dropdown
    var marcasUnicas = ['Todas',...new Set(veiculosFiltrados.map(veiculo => veiculo.marca))];
    var dropdownMarca = $("#dropdownItensMenu");
    dropdownMarca.html('');
    marcasUnicas.forEach(function (marca) {
        var option = $('<a>', {
          class: "dropdown-item ddpItemMarcaDoVeiculo text-dark custom-smaller-text",
          href: "#",
          "data-value": marca,
          text: marca
        });

        dropdownMarca.append(option);
      });

      dropdownMarca.find(".ddpItemMarcaDoVeiculo").click(function () {
        var marcaSelecionada = $(this).data("value");
        $("#ddbMarca").text(marcaSelecionada);
        marcaDoVeiculo = marcaSelecionada;
        filtroDeBusca();
      });

    //filtro de marca de veiculo
    if (marcaDoVeiculo == "Todas") {
        veiculosFiltrados1 = [...veiculosFiltrados];
    }else{
        veiculosFiltrados1 = veiculosFiltrados.filter(function(veiculo) {
            return veiculo.marca.toLowerCase() == marcaDoVeiculo.toLowerCase();
        });
    }

    //filtro de ano de fabricação
    veiculosFiltrados1 = veiculosFiltrados1.filter(function(veiculo) {
        return veiculo.ano_modelo >= anoInicial && veiculo.ano_modelo <= anoFinal;
    });

     //filtro de valor minimo e maximo
    veiculosFiltrados1 = veiculosFiltrados1.filter(function(veiculo) {
        return veiculo.valor >= valorMinimo && veiculo.valor <= valorMaximo;
    });

    //filtro de quilometragem minima e maxima
    console.log('kmMinimo: ',kmMinima );
    console.log('kmMaxima: ',kmMaxima );
    veiculosFiltrados2 = veiculosFiltrados1.filter(function(veiculo) {
        return veiculo.quilometragem >= kmMinima && veiculo.quilometragem <= kmMaxima;
    });

    //filtro de cor
    var coresUnicas = ['Todas',...new Set(veiculosFiltrados2.map(veiculo => veiculo.cor))];
    var dropdownCor = $("#dropdownItensMenuCores");
    dropdownCor.html('');
    coresUnicas.forEach(function (cor) {
        var option = $('<a>', {
          class: "dropdown-item ddpItemCor text-dark custom-smaller-text",
          href: "#",
          "data-value": cor,
          text: cor
        });

        dropdownCor.append(option);
    })
    dropdownCor.find(".ddpItemCor").click(function () {
        var corSelecionada = $(this).data("value");
        $("#ddbCor").text(corSelecionada);
        corVeiculo = corSelecionada;
        filtroDeBusca();
    })
    if (corVeiculo == "Todas") {
        veiculosFiltrados3 = [...veiculosFiltrados2];
    }else{
        veiculosFiltrados3 = veiculosFiltrados2.filter(function(veiculo) {
            return veiculo.cor.toLowerCase() == corVeiculo.toLowerCase();
        });
    }


    // Exibir os veículos filtrados
    console.log(veiculosFiltrados3);

    renderVeiculos(veiculosFiltrados3);

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
                    <h5 class="card-title">${element.modelo}</h5>
                    <span class="card-text potencia custom-small-text">${element.motor}</span>
                    <span class="card-text motor custom-small-text">${element.valvulas}</span>
                    <span class="card-text cambio custom-small-text">${element.combustivel}</span>
                    <span class="card-text cambio custom-small-text">${element.cambio}</span>
                    <p class="card-text valor custom-medium-text pt-1 mb-1">${formatarValor(element.valor)}</p>
                    <span class="card-text anoModelo custom-small-text">${element.ano_fabricacao}</span>
                    <span class="card-text custom-small-text">/</span>
                    <span class="card-text anoModelo custom-small-text">${element.ano_modelo}</span>
                    <p class="card-text text-right quilometragem">${element.quilometragem} km</p>
                    <div class="container text-center">
                        <button type="button" class="btn btn-primary btn-sm custom-small-text" onclick="veiculoMaisInformacoes(${element.id_veiculo})">Mais informações</button>
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

function veiculoMaisInformacoes(id_veiculo) {
    sessionStorage.setItem('id_veiculo', id_veiculo);
    window.location.href = 'http://127.0.0.1:5500/assets/pages/carro.html';
}
