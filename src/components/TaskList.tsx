import { Task } from "../data/taskInterface";
import { useTaskStore } from "../store/todoStore";
import { motion } from "framer-motion";
interface ListTaskProps {
  task: Task;
}

export const TaskList: React.FC<ListTaskProps> = ({ task }) => {
  const variants = {
    initial: { opacity: 0, y: 80 ,x:10},
    animate: { opacity: 1, y: 0,x:0 },
  };
  const { removeTask, toggleTask } = useTaskStore();
  return (
    <motion.li
      variants={variants}
      animate="animate"
      initial="initial"
      className="flex items-center p-2"
      layout
    >
      <input
        type="checkbox"
        id="task"
        checked={task.done}
        className="form-checkbox w-5 h-5"
        onChange={() => toggleTask(task.id)}
      />
      <label
        htmlFor="task"
        className={`flex-1 ml-2 ${task.done && "line-through"}`}
      >
        {" "}
        {task.name}
      </label>
      <button
        onClick={() => removeTask(task.id)}
        className={`px-2 py-1 bg-red-500 hover:bg-red-600 text-white rounded`}
      >
        remove
      </button>
    </motion.li>
  );
};
