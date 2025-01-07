// gerenciamentoHospital.ts

import { Paciente, adicionarPaciente, listarPacientes } from "../ src/paciente";
import { criarAgendamento, listarAgendamentos } from "../ src/agendamento";
import { criarProntuario, buscarProntuario } from "../ src/prontuario";

// Exemplo: Adicionando um paciente
const paciente1 = new Paciente("João Silva", 30, "123.456.789-00", "(11) 98765-4321");
adicionarPaciente(paciente1);

// Exemplo: Criando um agendamento
criarAgendamento({
  pacienteId: "123.456.789-00",
  data: "2025-01-15",
  horario: "14:00",
  medico: "Dra. Ana Souza",
});

// Exemplo: Criando um prontuário
criarProntuario({
  pacienteId: "123.456.789-00",
  historicoMedico: "Sem histórico relevante.",
  medicamentos: ["Paracetamol"],
  alergias: ["Nenhuma"],
});

// Listando informações
console.log("Pacientes:", listarPacientes());
console.log("Agendamentos:", listarAgendamentos());
console.log("Prontuário do paciente:", buscarProntuario("123.456.789-00"));
