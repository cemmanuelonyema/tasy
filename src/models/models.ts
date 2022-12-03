export interface TaskModel {
  id: string;
  title: string;
  description: string;
  tag: string;
  completed: boolean;
}

export interface TaskState {
  tasks: TaskModel[];
  task: TaskModel;
}
