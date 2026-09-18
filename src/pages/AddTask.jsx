import { useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function AddTask() {
  const { addTask, tasks, updateTask } = useTasks();

  const navigate = useNavigate();

  const { id } = useParams();

  const editingTask = id
    ? tasks.find((task) => task.id === Number(id))
    : null;

  const [description, setDescription] = useState(
    editingTask?.description || ""
  );

  const [priority, setPriority] = useState(
    editingTask?.priority || "Medium"
  );

  const [category, setCategory] = useState(
    editingTask?.category || "College"
  );

  const [due, setDue] = useState(
    editingTask?.due || "28 Aug 2026"
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskData = {
      description,
      priority,
      category,
      due,
    };

    if (editingTask) {
      updateTask(id, taskData);
    } else {
      addTask(taskData);
    }

    navigate("/tasks");
  };

  return (
    <section className="form-page">
      <div className="page-header">
        <div>
          <p className="page-label">
            {editingTask ? "UPDATE TASK" : "NEW TASK"}
          </p>

          <h1>
            {editingTask ? "Edit Task" : "Add Task"}
          </h1>

          <p>
            {editingTask
              ? "Update your task information."
              : "Create a new task and set its priority."}
          </p>
        </div>
      </div>

      <form
        className="task-form"
        onSubmit={handleSubmit}
      >
        <div className="form-group full">
          <label>Task Description</label>

          <input
            type="text"
            placeholder="Enter task description"
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Priority</label>

          <select
            value={priority}
            onChange={(event) =>
              setPriority(event.target.value)
            }
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="form-group">
          <label>Category</label>

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            <option>College</option>
            <option>Development</option>
            <option>Personal</option>
            <option>Work</option>
          </select>
        </div>

        <div className="form-group">
          <label>Due Date</label>

          <input
            type="text"
            value={due}
            onChange={(event) =>
              setDue(event.target.value)
            }
            placeholder="28 Aug 2026"
            required
          />
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate("/tasks")}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="primary-button"
          >
            {editingTask
              ? "Update Task"
              : "Create Task"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddTask;