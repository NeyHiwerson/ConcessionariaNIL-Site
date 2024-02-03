var tipoDeVeiculo;
var veiculoNovo;
var veiculoUsado;
var marcaDoVeiculo;
var anoInicial;
var anoFinal;
var valorMinimo;
var valorMaximo;
var kmMinima;
var kmMaxima;
var corVeiculo;

$(document).ready(function(){
    $(".ddpItemTipoDeVeiculo").click(function(){
        var selectedOptionTipoDeVeiculo = $(this).data("value");
        $("#ddbTipoDeVeiculo").html(selectedOptionTipoDeVeiculo);
        tipoDeVeiculo = selectedOptionTipoDeVeiculo;
    });
});
/* evento do ckbNovo */
var meuCheckBoxNovo = document.getElementById('ckbNovo');
    
if (meuCheckBoxNovo) {
    meuCheckBoxNovo.addEventListener("change", function() {
        // Verifica se o checkbox está marcado ou desmarcado
        if (meuCheckBoxNovo.checked) {
            veiculoNovo = true;
            console.log("Checkbox Novo marcado");
            // Adicione o código que deseja executar quando o checkbox é marcado aqui
        } else {
            veiculoNovo = false;
            console.log("Checkbox Novo desmarcado");
            // Adicione o código que deseja executar quando o checkbox é desmarcado aqui
        }
    });
}

/* evento do ckbUsado */
var meuCheckBoxUsado = document.getElementById('ckbUsado');
    
if (meuCheckBoxUsado) {
    meuCheckBoxUsado.addEventListener("change", function() {
        // Verifica se o checkbox está marcado ou desmarcado
        if (meuCheckBoxUsado.checked) {
            veiculoUsado = true;
            console.log("Checkbox Usado marcado");
            // Adicione o código que deseja executar quando o checkbox é marcado aqui
        } else {
            veiculoUsado = false;
            console.log("Checkbox Usado desmarcado");
            // Adicione o código que deseja executar quando o checkbox é desmarcado aqui
        }
    });
}

$(document).ready(function(){
    $(".ddpItemMarcaDoVeiculo").click(function(){
        var selectedOptionMarcaDoVeiculo = $(this).data("value");
        $("#ddbMarca").html(selectedOptionMarcaDoVeiculo);
        marcaDoVeiculo = selectedOptionMarcaDoVeiculo;
    });
});

/* ano inicial e final */
var formAno = document.getElementById("formAno");

if (formAno) {
    formAno.addEventListener("click", function(event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Obtém os valores dos campos
        anoInicial = document.getElementById("anoInicial").value;
        anoFinal = document.getElementById("anoFinal").value;

        // Adicione o código que deseja executar com os valores dos anos aqui
        console.log("Ano Inicial:", anoInicial);
        console.log("Ano Final:", anoFinal);
    });
}

/* valorMinimo e valorMaximo */
var formValor = document.getElementById("formValor");
var inputValorMinimo = document.getElementById("valorMinimo");
var inputValorMaximo = document.getElementById("valorMaximo");

if (formValor && inputValorMinimo && inputValorMaximo) {
    // Ouve o evento de envio do formulário para evitar o envio padrão
    formValor.addEventListener("submit", function(event) {
        event.preventDefault();
        capturarValores();
    });

    // Ouve o evento de mudança de foco nos campos de entrada
    inputValorMinimo.addEventListener("blur", capturarValores);
    inputValorMaximo.addEventListener("blur", capturarValores);

    // Ouve o evento de pressionar Enter nos campos de entrada
    inputValorMinimo.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            capturarValores();
        }
    });

    inputValorMaximo.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            capturarValores();
        }
    });
}

function capturarValores() {
    // Obtém os valores dos campos de entrada
    valorMinimo = inputValorMinimo.value;
    valorMaximo = inputValorMaximo.value;

    // Adicione o código que deseja executar com os valores mínimos e máximos aqui
    console.log("Valor Mínimo:", valorMinimo);
    console.log("Valor Máximo:", valorMaximo);
}

/* filtro de quilometragem */
var formKm = document.getElementById("formKm");
var inputKmMinimo = document.getElementById("kmMinimo");
var inputKmMaximo = document.getElementById("kmMaximo");

if (formKm && inputKmMinimo && inputKmMaximo) {
    // Ouve o evento de envio do formulário para evitar o envio padrão
    formKm.addEventListener("submit", function(event) {
        event.preventDefault();
        capturarValoresKm();
    });

    // Ouve o evento de mudança nos campos de entrada de quilometragem
    inputKmMinimo.addEventListener("input", capturarValoresKm);
    inputKmMaximo.addEventListener("input", capturarValoresKm);
}

function capturarValoresKm() {
    // Obtém os valores dos campos de entrada de quilometragem
    kmMinima = inputKmMinimo.value;
    kmMaxima = inputKmMaximo.value;

    // Adicione o código que deseja executar com os valores de quilometragem mínima e máxima aqui
    console.log("Quilometragem Mínima:", kmMinima);
    console.log("Quilometragem Máxima:", kmMaxima);
}

/* captura da cor do veiculo */
$(document).ready(function(){
    $(".ddpItemCor").click(function(){
        var selectedOptionItemCor = $(this).data("value");
        $("#ddbCor").html(selectedOptionItemCor);
        corVeiculo = selectedOptionItemCor;
    });
});


function formatarMoeda(input) {
    var valor = input.value.replace(/\D/g, '');
    var options = { style: 'currency', currency: 'BRL' };
    input.value = new Intl.NumberFormat('pt-BR', options).format(valor / 100);
}


// Função para limpar os filtros
function limparFiltros() {
    // Clear Tipo de Veiculo dropdown
    document.getElementById('ddbTipoDeVeiculo').innerText = 'Todos';

    // Clear checkboxes for Veiculo (Novo and Usado)
    document.getElementById('ckbNovo').checked = false;
    document.getElementById('ckbUsado').checked = false;

    // Clear Marca dropdown
    document.getElementById('ddbMarca').innerText = 'Todas';

    // Clear Filtro de Ano inputs
    document.getElementById('anoInicial').value = '2000';
    document.getElementById('anoFinal').value = '2024';

    // Clear Valor inputs
    document.getElementById('valorMinimo').value = '';
    document.getElementById('valorMaximo').value = '';

    // Clear Filtro de Quilometragem inputs
    document.getElementById('kmMinimo').value = '0';
    document.getElementById('kmMaximo').value = '80000';

    // Clear Cor dropdown
    document.getElementById('ddbCor').innerText = 'Todas as Cores';
}

