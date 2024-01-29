import { useContext } from "react";
import AddTaskModal from "./AddTaskModal";
import { TasksContext } from "./TaskBord";

const AddTask = () => {
  const { showTakModal, handleTaskModalShow, handleCloseTaslModal } =
    useContext(TasksContext);

  return (
    <div class="mb-14 items-center justify-between sm:flex">
      <h2 class="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div class="flex items-center space-x-5">
        <button
          class="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={handleTaskModalShow}
        >
          Add Task
        </button>
        <button class="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
          Delete All
        </button>
      </div>
      {showTakModal && <AddTaskModal onCloseModal={handleCloseTaslModal} />}
    </div>
  );
};

export default AddTask;
