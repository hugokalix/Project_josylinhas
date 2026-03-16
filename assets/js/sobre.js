// ==========================================
// EXERCÍCIOS DE LÓGICA NA TELA - JOSYLINHAS
// ==========================================

const painelArray = document.getElementById("resultado-array");
const painelSwitch = document.getElementById("resultado-switch");
const painelObjeto = document.getElementById("resultado-objeto");

// Trava de segurança: só executa se estivermos na página Sobre.html
if (painelArray && painelSwitch && painelObjeto) {
  
  // --- EXERCÍCIO 1: Controle de serviços (Array) ---
  let servicos = ["barra de calça", "ajuste de vestido", "reforma de camisa"];
  servicos.unshift("figurino de carnaval"); // Adiciona no início
  servicos.shift(); // Remove o primeiro
  
  painelArray.innerText = servicos.join(", ");


  // --- EXERCÍCIO 2: Switch - Tipo de Serviço ---
  let opcaoCliente = 3; 
  let servicoEscolhido = "";

  switch (opcaoCliente) {
    case 1: servicoEscolhido = "Ajuste de barra"; break;
    case 2: servicoEscolhido = "Reforma de vestido"; break;
    case 3: servicoEscolhido = "Confecção sob medida"; break;
    default: servicoEscolhido = "Opção inválida";
  }
  
  painelSwitch.innerText = "Opção " + opcaoCliente + " -> " + servicoEscolhido;


  // --- EXERCÍCIO 3: Cadastro de costureira (Objeto) ---
  let costureira = {
    nome: "Joseli",
    experiencia: 5, 
    especialidade: "Figurinos sustentáveis"
  };

  costureira.experiencia += 1; // Aumenta a experiência em 1 ano

  painelObjeto.innerText = costureira.nome + " | " + costureira.experiencia + " anos de experiência | Especialidade: " + costureira.especialidade;
}
