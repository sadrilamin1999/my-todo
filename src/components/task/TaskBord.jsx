import { createContext, useState } from "react";
import TaskList from "./TaskList";

export const TasksContext = createContext();

const TaskBord = () => {
  // state
  const [showTakModal, setShowTaskModal] = useState(false);
  const [tasks, setTasks] = useState({
    title: "",
    description: "",
    tags: "",
    priority: "",
  });
  const handleTaskModalShow = () => {
    setShowTaskModal(true);
  };

  const handleCloseTaslModal = () => {
    setShowTaskModal(false);
  };

  // form submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    setShowTaskModal(false);
  };

  return (
    <section className="mb-20" id="tasks">
      <TasksContext.Provider
        value={{
          tasks,
          setTasks,
          showTakModal,
          handleTaskModalShow,
          handleCloseTaslModal,
          submitHandler,
        }}
      >
        <TaskList tasks={tasks} />
      </TasksContext.Provider>
    </section>
  );
};

export default TaskBord;
