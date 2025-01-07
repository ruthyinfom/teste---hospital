// agendamento.ts

type Agendamento = {
    pacienteId: string;
    data: string;
    horario: string;
    medico: string;
  };
  
  const agendamentos: Agendamento[] = [];
  
  // Função para criar um novo agendamento
  function criarAgendamento(agendamento: Agendamento): void {
    agendamentos.push(agendamento);
    console.log("Agendamento criado:", agendamento);
  }
  
  // Função para listar agendamentos
  function listarAgendamentos(): Agendamento[] {
    return agendamentos;
  }
  
  export { Agendamento, criarAgendamento, listarAgendamentos };
  