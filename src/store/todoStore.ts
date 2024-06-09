import { Task } from "./../data/taskInterface";
import { create } from "zustand";
import { TaskStore } from "./TaskStoreInterface";
import tasks from "../data/task";

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [...tasks],
  addTask: (task: Task) =>
    set((state) => ({
      tasks: [...state.tasks, task],
    })),
  removeTask: (id: number) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
  toggleTask: (id: number) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    }));
  },
  countTaskDone: () => {
    const tasks: Task[] = get().tasks;
    return tasks.filter((task) => task.done).length;
  },
  countTaskNotDone: () => {
    const tasks: Task[] = get().tasks;
    return tasks.filter((task) => !task.done).length;
  },
}));
