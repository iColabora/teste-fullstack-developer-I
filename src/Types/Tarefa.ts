interface DrillDown {
  INSTANCIA: number;
  PROTOCOLO: string;
  REGUA: string;
  SLA: string;
  STATUS: string;
  TIPO_SOLICITACAO: string;
  inicio: string;
  operador: string;
}

export interface Tarefa {
  TAREFA: string;
  STT: string;
  D0: number;
  D1: number;
  D2: number;
  D3: number;
  TOTAL: number;
  VENCIDO: number;
  DRILLDOWN: DrillDown[];
}
