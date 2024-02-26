const urlLocal = "https://wild-lion-khakis.cyclic.app";
const complemento = "/estoque";
var veiculos = [];

$(document).ready(async function() {
    try {
        const data = await $.ajax({
            url: urlLocal + complemento,
            type: "GET",
            dataType: "json"
        });

        if (Array.isArray(data)) {
            veiculos = data;
        } else {
            console.error("Os dados da API não são um array.");
        }
        } catch (error) {
        console.error("Erro na requisição da API:", error.statusText);
        }

    veiculos.sort((a, b) => b.valor - a.valor);
    const top6Veiculos = veiculos.slice(0, 6);

    top6Veiculos.forEach(element => {
        var cardHtml = `
        <style>
        .custom-btn {
            border: 1px solid #FF1616;
            background-color: #fff;
            color: #FF1616;
            transition: background-color 0.3s, color 0.3s;
        }

        .custom-btn:hover {
            background-color: #FF1616;
            color: #fff;
        }

        .custom-image {
            height: 287.02px;
            width: auto;
            object-fit: cover;
            /* Pode adicionar outras propriedades conforme necessário */
        }
        </style>

        <div class="custom-col col-xs-12 col-md-6 col-lg-4 pt-2 px-1">
        <div class="card h-100">
        <img src="${element.link_1}" class="card-img-top custom-image" alt="imagem do ">
        <div class="card-body">
        <h5 class="card-title">${element.modelo}</h5>
        <span class="card-text potencia custom-small-text">${element.motor}</span>
        <span class="card-text motor custom-small-text">${element.valvulas}</span>
        <span class="card-text cambio custom-small-text">${element.combustivel}</span>
        <span class="card-text cambio custom-small-text">${element.cambio}</span>
        <br>
        <span class="card-text valor custom-medium-text pt-3 mb-1">${formatarValor(element.valor)}</span>
        <br>
        <span class="card-text anoModelo custom-small-text">${element.ano_fabricacao}</span>
        <span>/</span>
        <span class="card-text anoModelo custom-small-text">${element.ano_modelo}</span>
        <p class="card-text quilometragem text-right">${element.quilometragem} km</p>
        <div class="container text-center">
        <button type="button" class="btn btn-sm custom-btn custom-small-text" onclick="veiculoMaisInformacoes(${element.id_veiculo})">Mais informações</button>
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
});

function toggleMenu() {
    var sideMenu = document.getElementById("sidemenu");
    sideMenu.classList.toggle("show");
}

function veiculoMaisInformacoes(id_veiculo) {
        sessionStorage.setItem('id_veiculo', id_veiculo);
        window.location.href = './assets/pages/carro.html';
}

function formatarValor(valor) {
    var valorFormatado = valor.replace(/\D/g, '');
    var options = { style: 'currency', currency: 'BRL' };
    return new Intl.NumberFormat('pt-BR', options).format(valorFormatado / 100);
}
