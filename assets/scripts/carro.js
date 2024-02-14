const urlLocal = "https://wild-lion-khakis.cyclic.app";
const complemento = "/estoque/veiculo/";
var data;
$(document).ready(async function () {
    var id_veiculo = sessionStorage.getItem('id_veiculo');
    console.log(id_veiculo);
    try {
        // Use o await para aguardar a conclusão da requisição AJAX
        data = await $.ajax({
            url: urlLocal + complemento + id_veiculo,
            type: "GET",
            dataType: "json"
        });

        // Certifique-se de que 'data' é um objeto
        if (typeof data === 'object') {
            // Você pode usar diretamente os dados aqui
            console.log(data);
        } else {
            console.error("Os dados da API não são um objeto.");
        }
    } catch (error) {
        console.error("Erro na requisição da API:", error.statusText);
    }
    //gerar a pagina a partir dos dados da API
     // Atualiza o nome da marca e modelo
     $("#nomeMarcaModelo").text(`${data.marca} ${data.modelo}`);

     // Atualiza o valor
     $("#valor").text(formatarValor(data.valor));

     // Atualiza as imagens do carousel
     const carousel = $("#carouselExample");
     const carouselItens = $("#carouselItens");
     const carouselIndicators = $("#carouselIndicators");
     carouselItens.empty();
     carouselIndicators.empty();
     for (let i = 0; i < 10; i++) {
        const linkImagem = data[`link_${i + 1}`];
        if (linkImagem !== null && linkImagem !== undefined) {
            const activeClass = i === 0 ? "active" : "";
            const imageElement = `
                <div class="carousel-item ${activeClass}">
                    <img src="${linkImagem}" class="d-block w-100 img-fluid" alt="Imagem ${i + 1}" style="max-width: 1110px; max-height: 624.38px; object-fit: cover;">
                </div>
            `;
            const indicatorElement = `
                <li data-target="#carouselExample" data-slide-to="${i}" class="${activeClass}"></li>`

            carouselItens.append(imageElement);
            carouselIndicators.append(indicatorElement);
        }
    }

    const infoTable = $("#infoTable");
    const dataKeys = Object.keys(data);
    infoTable.empty();

    for (let i = 0; i < dataKeys.length; i += 2) {
        const key1 = dataKeys[i];
        const key2 = dataKeys[i + 1];
        const value1 = data[key1];
        const value2 = data[key2];

        if (value1 !== null && value1 !== undefined && !key1.startsWith("link_")
         && value2 !== null && value2 !== undefined && !key2.startsWith("link_")) {
            const rowElement1 = `
                <tr>
                    <td>${key1.charAt(0).toUpperCase() + key1.slice(1)}: <span>${value1}</span></td>
                    <td>${key2.charAt(0).toUpperCase() + key2.slice(1)}: <span>${value2}</span></td>
                </tr>`;
            infoTable.append(rowElement1);
        }
    }

});
function toggleMenu() {
    var sideMenu = document.getElementById("sidemenu");
    sideMenu.classList.toggle("show");
}


function formatarValor(valor) {
    var valorFormatado = valor.replace(/\D/g, '');
    var options = { style: 'currency', currency: 'BRL' };
    return new Intl.NumberFormat('pt-BR', options).format(valorFormatado / 100);
}
