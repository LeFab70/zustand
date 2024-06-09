import { AddTask } from "./components/AddTask";
import { AllTasks } from "./components/AllTasks";

import { useTaskStore } from "./store/todoStore";

const App = () => {
  const { countTaskDone, countTaskNotDone } = useTaskStore();
  return (
    <div className="container mx-auto max-w-2xl md:max-w-3xl h-screen py-6">
      <div className="flex flex-col p-4 border rounded-lg shadow-lg h-full">
        <h1 className="text-3xl font-bold mb-4">
          Tasks lists : <strong>{countTaskDone() + countTaskNotDone()}</strong>
          <span className="text-lg ml-2 font-normal">
            (Done:{countTaskDone()})
          </span>
          <span className="text-lg ml-2 font-normal">
            (Not done:{countTaskNotDone()})
          </span>
        </h1>
        <AddTask />
        <hr className=" p-4" />
        <AllTasks />
      </div>
    </div>
  );
};

export default App;
