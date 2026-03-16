// ==========================================
// EXERCÍCIOS DE LÓGICA NA TELA - JOSYLINHAS
// ==========================================

const painelArray = document.getElementById("resultado-array");
const painelSwitch = document.getElementById("resultado-switch");
const painelObjeto = document.getElementById("resultado-objeto");

// Trava de segurança
if (painelArray && painelSwitch && painelObjeto) {
  
  // 1. NOSSO "BANCO DE DADOS" TEMPORÁRIO (O Estado da Aplicação)
  let servicos = ["barra de calça", "ajuste de vestido", "reforma de camisa"];
  let opcaoCliente = 3; 
  let costureira = {
    nome: "Joseli",
    experiencia: 5, 
    especialidade: "Figurinos sustentáveis"
  };

  // 2. FUNÇÃO QUE DESENHA OS DADOS NA TELA
  function atualizarTela() {
    // Atualiza o Array
    painelArray.innerText = servicos.join(", ");

    // Atualiza o Switch
    let servicoEscolhido = "";
    switch (Number(opcaoCliente)) {
      case 1: servicoEscolhido = "Ajuste de barra"; break;
      case 2: servicoEscolhido = "Reforma de vestido"; break;
      case 3: servicoEscolhido = "Confecção sob medida"; break;
      default: servicoEscolhido = "Opção inválida (Falar com atendente)";
    }
    painelSwitch.innerText = "Opção " + opcaoCliente + " -> " + servicoEscolhido;

    // Atualiza o Objeto
    painelObjeto.innerText = costureira.nome + " | " + costureira.experiencia + " anos de experiência | Especialidade: " + costureira.especialidade;
  }

  // Desenha a tela pela primeira vez quando a página carrega
  atualizarTela();


  // 3. EVENTOS DE CLIQUE (Simulando o "Salvar" do Banco de Dados)
  
  // Botão: Adicionar Serviço
  document.getElementById("btn-add-servico").addEventListener("click", () => {
    const inputServico = document.getElementById("input-novo-servico");
    if (inputServico.value !== "") {
      servicos.push(inputServico.value); // Adiciona no final da fila (array)
      inputServico.value = ""; // Limpa o campo
      atualizarTela(); // Re-desenha a tela com o dado novo!
    }
  });

  // Botão: Mudar Orçamento
  document.getElementById("btn-muda-opcao").addEventListener("click", () => {
    const inputOpcao = document.getElementById("input-nova-opcao");
    if (inputOpcao.value !== "") {
      opcaoCliente = inputOpcao.value; // Atualiza a variável
      atualizarTela(); // Re-desenha a tela!
    }
  });

  // Botão: Adicionar Experiência
  document.getElementById("btn-add-exp").addEventListener("click", () => {
    costureira.experiencia += 1; // Soma +1 no objeto
    atualizarTela(); // Re-desenha a tela!
  });
}