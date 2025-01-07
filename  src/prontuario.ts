// prontuario.ts

type Prontuario = {
    pacienteId: string;
    historicoMedico: string;
    medicamentos: string[];
    alergias: string[];
  };
  
  const prontuarios: Prontuario[] = [];
  
  // Função para criar um prontuário
  function criarProntuario(prontuario: Prontuario): void {
    prontuarios.push(prontuario);
    console.log("Prontuário criado:", prontuario);
  }
  
  // Função para buscar o prontuário de um paciente
  function buscarProntuario(pacienteId: string): Prontuario | undefined {
    return prontuarios.find(p => p.pacienteId === pacienteId);
  }
  
  export { Prontuario, criarProntuario, buscarProntuario };
  