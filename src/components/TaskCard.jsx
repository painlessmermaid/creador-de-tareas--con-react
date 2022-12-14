import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deletTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800  text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize ">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py1 rounded-md mt-4 hover:bg-yellow-300 text-balack"
        onClick={() => deletTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
