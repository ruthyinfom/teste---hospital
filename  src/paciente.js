// pacientes.js

class Paciente {
    constructor(nome, idade, cpf, contato) {
      this.nome = nome;
      this.idade = idade;
      this.cpf = cpf;
      this.contato = contato;
    }
  }
  
  const pacientes = [];
  
  // Função para adicionar um paciente
  function adicionarPaciente(paciente) {
    pacientes.push(paciente);
    console.log(`Paciente ${paciente.nome} adicionado com sucesso!`);
  }
  
  // Função para listar todos os pacientes
  function listarPacientes() {
    return pacientes;
  }
  
  module.exports = { Paciente, adicionarPaciente, listarPacientes };
  