export class Evento{

    constructor(
      public titulo: string,
      public descricao: string,
      public local: string,
      public qtde_participantes: string,
      public data: string,
      public horario: string,
      public idEvento: string,
      public participantes: JSON
    ){}
    
  }
