export interface TaskModel {
  id: number;
  taskTitle: string;
  taskDescription: string;
  taskTag: string;
  completed: boolean;
}

export interface TaskState {
  tasks: TaskModel[];
  task: TaskModel;
}
