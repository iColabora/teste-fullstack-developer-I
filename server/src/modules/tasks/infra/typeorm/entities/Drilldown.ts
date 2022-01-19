import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Task from './Task';

@Entity('tasks_drilldowns')
class Drilldown {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('bigint')
  instance: number;

  @Column()
  status: string;

  @Column()
  protocol: string;

  @Column()
  scale: string;

  @Column()
  start: string;

  @Column()
  sla: string;

  @Column()
  request_type: string;

  @Column()
  operator: string;

  @Column('int')
  task_id: number;

  @ManyToOne(() => Task)
  @JoinColumn({ name: 'task_id' })
  task?: Task;
}

export default Drilldown;
