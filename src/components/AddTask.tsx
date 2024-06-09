import { useState } from "react";
import { Task } from "../data/taskInterface";
import { useTaskStore } from "../store/todoStore";

export const AddTask = () => {
   const addTask = useTaskStore((state) => state.addTask);
  //const { addTask } = useTaskStore();
  const [taskName, setTaskName] = useState("");
  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask: Task = { id: Date.now(), done: false, name: taskName };
    addTask(newTask);
    setTaskName("");
  };
  return (
    <form onSubmit={handleAddTask} className="flex justify-between p-2">
      <input
        type="text"
        placeholder="Add task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button
        type="submit"
        className="tansition duration-200 easy-in-out transform hover:bg-blue-600 bg-blue-500 rounded-sm px-6 text-white ml-2 "
      >
        Add task
      </button>
    </form>
  );
};
