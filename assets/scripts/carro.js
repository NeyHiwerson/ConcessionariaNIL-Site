const urlLocal = "https://wild-lion-khakis.cyclic.app";
const complemento = "/estoque/veiculo/";
$(document).ready(async function () {
    var id_veiculo = sessionStorage.getItem('id_veiculo');
    console.log(id_veiculo);
    try {
        // Use o await para aguardar a conclusão da requisição AJAX
        const data = await $.ajax({
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
     $("#valor").text(`R$ ${data.valor}`);

     // Atualiza as imagens do carousel
     const carouselImages = $("#carouselImages");
     const carouselIndicators = $("#carouselIndicators");
     for (let i = 0; i < 5; i++) {
         const link = data[`link_${i + 1}`];
         if (link) {
             const activeClass = i === 0 ? "active" : "";
             const imageElement = `<div class="carousel-item ${activeClass}">
                                     <img src="${link}" class="d-block w-100 img-fluid" alt="Imagem ${i + 1}" style="max-width: 1110px; max-height: 624.38px; object-fit: cover;">
                                 </div>`;
             const indicatorElement = `<li data-target="#carouselExample" data-slide-to="${i}" class="${activeClass}"></li>`;

             carouselImages.append(imageElement);
             carouselIndicators.append(indicatorElement);
         }
     }

     // Atualiza as informações técnicas na tabela
     const infoTable = $("#infoTable");
     const infoRows = [
         { label: "Marca", value: data.marca },
         { label: "Modelo", value: data.modelo },
         // Adicione outras linhas conforme necessário
     ];

     infoRows.forEach(row => {
         const rowElement = `<tr>
                                 <td>${row.label}: <span>${row.value}</span></td>
                             </tr>`;
         infoTable.append(rowElement);
     });
 
});
function toggleMenu() {
    var sideMenu = document.getElementById("sidemenu");
    sideMenu.classList.toggle("show");
}
