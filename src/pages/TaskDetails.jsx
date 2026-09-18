import { Link, useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function TaskDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    tasks,
    completeTask,
    deleteTask,
  } = useTasks();

  const task = tasks.find(
    (item) => item.id === Number(id)
  );

  if (!task) {
    return (
      <div className="empty-state">
        <div>🔍</div>
        <h3>Task Not Found</h3>
        <p>The requested task does not exist.</p>

        <Link to="/tasks" className="primary-button">
          Back to Tasks
        </Link>
      </div>
    );
  }

  const handleDelete = () => {
    deleteTask(task.id);
    navigate("/tasks");
  };

  return (
    <section>
      <Link to="/tasks" className="back-link">
        ← Back to Tasks
      </Link>

      <div className="details-card">
        <div className="details-header">
          <div>
            <p className="page-label">TASK DETAILS</p>
            <h1>{task.description}</h1>
          </div>

          <span
            className={`status ${task.status.toLowerCase()}`}
          >
            {task.status}
          </span>
        </div>

        <div className="details-grid">
          <div>
            <span>Priority</span>
            <strong>{task.priority}</strong>
          </div>

          <div>
            <span>Category</span>
            <strong>{task.category}</strong>
          </div>

          <div>
            <span>Due Date</span>
            <strong>{task.due}</strong>
          </div>

          <div>
            <span>Task ID</span>
            <strong>#{task.id}</strong>
          </div>
        </div>

        <div className="details-actions">
          {task.status !== "Completed" && (
            <button
              className="complete-button"
              onClick={() => completeTask(task.id)}
            >
              ✓ Mark as Completed
            </button>
          )}

          <Link
            to={`/tasks/${task.id}/edit`}
            className="secondary-button"
          >
            Edit Task
          </Link>

          <button
            className="delete-button"
            onClick={handleDelete}
          >
            Delete Task
          </button>
        </div>
      </div>
    </section>
  );
}

export default TaskDetails;