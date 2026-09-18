import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

function Dashboard() {
  const { tasks } = useTasks();

  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const highPriority = tasks.filter(
    (task) =>
      task.priority === "High" &&
      task.status !== "Completed"
  ).length;

  return (
    <section>
      <div className="page-header">
        <div>
          <p className="page-label">OVERVIEW</p>
          <h1>Dashboard</h1>
          <p>Manage your tasks and stay organized.</p>
        </div>

        <Link to="/tasks/add" className="primary-button">
          + Add Task
        </Link>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>📋</span>
          <p>Total Tasks</p>
          <h2>{totalTasks}</h2>
        </div>

        <div className="stat-card">
          <span>⏳</span>
          <p>Pending</p>
          <h2>{pendingTasks}</h2>
        </div>

        <div className="stat-card">
          <span>✓</span>
          <p>Completed</p>
          <h2>{completedTasks}</h2>
        </div>

        <div className="stat-card">
          <span>🔥</span>
          <p>High Priority</p>
          <h2>{highPriority}</h2>
        </div>
      </div>

      <div className="dashboard-card">
        <div>
          <p className="page-label">TASK MANAGEMENT</p>
          <h2>Stay on top of your work</h2>
          <p>
            Create tasks, set priorities, track progress and
            complete your work efficiently.
          </p>
        </div>

        <Link to="/tasks" className="secondary-button">
          View All Tasks →
        </Link>
      </div>
    </section>
  );
}

export default Dashboard;