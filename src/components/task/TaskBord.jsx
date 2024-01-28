// TaskBord.js
import { createContext, useState } from "react";
import TaskList from "./TaskList";

export const TasksContext = createContext();
const TaskBord = () => {
  const [tasks, setTasks] = useState({
    title: "",
    description: "",
    tags: "",
    priority: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(tasks);
    // setTasks(tasks);
  };

  return (
    <section className="mb-20" id="tasks">
      <TasksContext.Provider value={{ tasks, setTasks, submitHandler }}>
        <TaskList />
      </TasksContext.Provider>
    </section>
  );
};

export default TaskBord;
