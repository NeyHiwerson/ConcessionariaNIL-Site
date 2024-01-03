# ConcessionariaNIL-Site
site da ConcessionariaNIL



# Escopo do Projeto

## Plano de Gerenciamento do Projeto
??

## Documentação dos Requisoitos
  ### Site -> Para exibição online do estoque.
  ### PDV -> Para gerenciar estoque, clientes, vendas e NFe.
  ### BD -> Para persistir as informaçoes.
  ### API -> Para integrar Site, PDV e BD.

## Justificativa
  #### A concessionaria possuia apenas 1 loja e não tinha software de sistema de gerenciamento, fazendo todo cadastro de cliente e carro atraves de formularios de papel manualmente e enviando para o contador formalizar a venda e gerar a nota fiscal de compra do veiculo. Esse procedimento além de demorado é tambem de custo elevado e a loja não tem presença online pois não possuia site. A concessionaria esta abrindo uma 2° loja e quer um software para gerenciar seu estoque, clientes, registro de vendas, emitir NFe e um site para que seus clientes possam ver seu estoque disponível online.

## Restições
  - Orçamento limitado
  - Tempo: data de entrega 26/02/2024 - inauguração Loja2
  - Disponibilidade de recursos humanos extras para o desenvolvimento.

## Steakholders do projeto
  - Cliente do projeto: Claudia Werlich
  - Patrocinador do projeto: Entra21
  - Gerente do projeto: Claudia Werlich
  - Equipe do projeto:
      - Iago
      - Lorenzo
      - Ney Hiwerson Missias Ribeiro

---
---
## Site – Tem
- Exibição do catálogo dos carros
- Exibição de detalhes dos veículos
- Formulário para contato para duvidas e reclamações
- Link whatsapp para contato direto
- Pesquisa avançada
## Site - Não tem
- Cadastro do cliente
- Setor para peças ou reparos
- Compras online (checkout)
- Fornecedores diferentes

---
---
## Concessionária - Tem
- Cadastro de Funcionários Clientes ; Automóveis;
- Exibição de detalhes de veículos e clientes
- Área de atendimento a clientes online
- Pesquisas avançadas de clientes e veículos
- Área venda
- Consulta de cadastro de cliente
- Conclusão de venda com emissão de NFE
- Registro de venda
- Formulário para contato para duvidas e reclamações
## Concessionária - Não tem
- Setor de peças e oficinas de reparos
- Área de reclamação de clientes

---
---
#  Requisitos Funcionais:
## Site
- RF1: O site deve exibir uma lista de carros disponíveis com detalhes (modelo, ano, preço).
- RF2: Os usuários devem poder filtrar carros com base em critérios como marca, modelo, ano e valor.
- RF3: O site deve permitir que os usuários solicitem informações adicionais sobre um carro específico por meio de um formulário de contato.
- RF4: O site deve possuir um emblema wathsapp fixo no canto inferior direiro durante toda a navegação onde o cliente podera solicitar ajuda, exceto quando estiver vendo informações especificas de um veiculo que se ele apertar no emblema wathsapp vai ser pré carregada as informações do veiculo e anexada a mensagem.
- RF5: O site deve conter informações do endereço das nossas lojas assim como mapa da localização e link para abrir aplicativos gps para chegar ao local.
