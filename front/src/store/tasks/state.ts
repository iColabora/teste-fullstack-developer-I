export interface IDrilldown {
  id: number;
  instance: number;
  status: string;
  protocol: string;
  scale: string;
  start: string;
  sla: string;
  request_type: string;
  operator: string;
}

export interface ITask {
  id: number;
  task: string;
  stt: string;
  drilldowns: IDrilldown[];
  finished: number;
  d0: number;
  d1: number;
  d2: number;
  d3: number;
  total: number;
}

export interface TasksStateInterface {
  list: ITask[];
}

function state(): TasksStateInterface {
  return {
    list: [],
  };
}

export default state;
