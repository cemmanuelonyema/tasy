export interface TodoModel {
  id: number;
  taskTitle: string;
  taskDescription?: string;
  taskTag?: string;
  completed: boolean;
}
