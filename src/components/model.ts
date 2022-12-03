export interface TaskModel {
  id: number;
  taskTitle: string;
  taskDescription?: string;
  taskTag?: string;
  completed: boolean;
}
