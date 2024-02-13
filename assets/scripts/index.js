function toggleMenu() {
    var sideMenu = document.getElementById("sidemenu");
    sideMenu.classList.toggle("show");
}

var veiculos = [
    {
        id_veiculo: 1,
        nome: "Nissan Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57.000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
    {
        id_veiculo: 2,
        nome: "BMW 320i",
        motor: "2.0 Turbo",
        valvulas: "16V",
        combustivel: "Gasolina",
        cambio: "Automático",
        valor: "230.000",
        quilometragem: "0",
        cidade: "Joinville",
        estado: "SC",
        ano: "2020",
        modelo: "2020",
        link_1: 
        "https://carroscomcamanzi.com.br/wp-content/uploads/2019/09/BMW-3-Series-2019-1600-06.jpg"
    },
    {
        id_veiculo: 3,
        nome: "Versa",
        motor: "1.0",
        valvulas: "12V",
        combustivel: "Flex",
        cambio: "Manual",
        valor: "40000",
        quilometragem: "57.000",
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
        quilometragem: "57.000",
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
        quilometragem: "57.000",
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
        quilometragem: "57.000",
        cidade: "Joinville",
        estado: "SC",
        ano: "2016",
        modelo: "2016",
        link_1: "https://carroecarros.com.br/wp-content/uploads/2015/04/novo-Nissan-Versa-2016-2.jpg"
    },
];

$(document).ready(function() {

    veiculos.forEach(element => {
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
                    <h5 class="card-title">${element.nome}</h5>
                    <span class="card-text potencia custom-small-text">${element.motor}</span>                                
                    <span class="card-text motor custom-small-text">${element.valvulas}</span>
                    <span class="card-text cambio custom-small-text">${element.combustivel}</span>
                    <span class="card-text cambio custom-small-text">${element.cambio}</span>
                    <br>
                    <span class="card-text valor custom-medium-text pt-3 mb-1">Valor: ${element.valor}</span>
                    <br>
                    <span class="card-text anoModelo custom-small-text">${element.ano}</span>
                    <span>/</span>
                    <span class="card-text anoModelo custom-small-text">${element.modelo}</span>
                    <p class="card-text quilometragem text-right">${element.quilometragem} km</p>
                    <div class="container text-center">
                        <button type="button" class="btn btn-sm custom-btn custom-small-text" onclick="veiculoMaisInformacoes()">Mais informações</button>
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
function veiculoMaisInformacoes() {
    // Lógica para mais informações do veículo
    alert("Mais informações do veículo");
}