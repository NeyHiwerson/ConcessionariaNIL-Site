const urlLocal = "https://wild-lion-khakis.cyclic.app";
    const complemento = "/duvidas";

    $(document).ready(function () {
      $("#enviarBtn").click(function () {
        // Obtenha os valores dos campos do formulário
        const nome = $("#nome").val();
        const email = $("#email").val();
        const assunto = $("#assunto").val();
        const mensagem = $("#mensagem").val();

        // Verifique se todos os campos estão preenchidos
        if (!nome || !email || !assunto || !mensagem) {
          alert("Preencha todos os campos do formulário.");
          return;
        }

        // Objeto com os dados a serem enviados
        const dados = {
          nome: nome,
          email: email,
          assunto: assunto,
          mensagem: mensagem
        };

        // Fazer a requisição POST
        $.ajax({
          url: urlLocal + complemento,
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify(dados),
          success: function (response) {
            console.log(response);
            alert("Dúvida enviada com sucesso!");
            // Limpar os campos do formulário após o envio bem-sucedido
            $("#nome, #email, #assunto, #mensagem").val("");
          },
          error: function (error) {
            console.error("Erro ao enviar a dúvida:", error);
            alert("Erro ao enviar a dúvida. Tente novamente.");
          }
        });
      });
    });

    function toggleMenu() {
      var sideMenu = document.getElementById("sidemenu");
      sideMenu.classList.toggle("show");
  }
