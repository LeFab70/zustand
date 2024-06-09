import { AnimatePresence } from "framer-motion";
import { Task } from "../data/taskInterface";
import { useTaskStore } from "../store/todoStore";
import { TaskList } from "./TaskList";

export const AllTasks = () => {
  const tasks: Task[] = useTaskStore((state) => state.tasks);
  return (
    <AnimatePresence>
      <ul>
        {tasks.map((task) => (
          <TaskList key={task.id} task={task} />
        ))}
      </ul>
    </AnimatePresence>
  );
};
