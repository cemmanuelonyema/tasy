export interface TaskModel {
  id: number;
  taskTitle: string;
  completed: boolean;
}

export interface TaskState {
  tasks: TaskModel[];
  task: TaskModel;
}
