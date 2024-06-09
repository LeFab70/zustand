import { Task } from "../data/taskInterface";

export interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
  countTaskDone: () => number;
  countTaskNotDone: () => number;
}
