export class Cliente {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    cidade: string;
    estado: string;
    cep: string;
  
    constructor() {
      this.id = 0;
      this.nome = '';
      this.email = '';
      this.telefone = '';
      this.endereco = '';
      this.cidade = '';
      this.estado = '';
      this.cep = '';
    }
  }
  