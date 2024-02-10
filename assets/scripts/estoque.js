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
var veiculos = [
    {
        id_veiculo: 1,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 2,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 3,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 4,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 5,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 6,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 7,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 8,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 9,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 10,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 11,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 12,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 13,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 14,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 15,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 16,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 17,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 18,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 19,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 20,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 21,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 22,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 23,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 24,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 25,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    }   
];

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
                    <span class="card-text anoModelo custom-small-text">${element.ano}</span>
                    <span class="card-text custom-small-text">/</span>
                    <span class="card-text anoModelo custom-small-text">${element.modelo}</span>
                    <p class="card-text text-right quilometragem">${element.quilometragem}</p>
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
        renderVeiculos();
    }
};

function proximaPagina() {
    const totalPages = Math.ceil(veiculos.length / veiculosPorPagina);
    if (paginaAtual < totalPages) {
        paginaAtual++;
        renderVeiculos();
    }
};

renderVeiculos(veiculos);


function veiculoMaisInformacoes() {
    // Lógica para mais informações do veículo
    alert("Mais informações do veículo");
}
