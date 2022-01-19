import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Drilldown from './Drilldown';

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  task: string;

  @Column()
  stt: string;

  @OneToMany(() => Drilldown, dd => dd.task)
  drilldowns: Drilldown[];

  finished = 0;

  d0 = 0;

  d1 = 0;

  d2 = 0;

  d3 = 0;

  total = 0;
}

export default Task;
