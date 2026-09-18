import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function CompletedTasks() {
  const {
    tasks,
    deleteTask,
  } = useTasks();

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  );

  return (
    <section>
      <div className="page-header">
        <div>
          <p className="page-label">TASK HISTORY</p>
          <h1>Completed Tasks</h1>
          <p>Review tasks that you have completed.</p>
        </div>
      </div>

      <div className="task-grid">
        {completedTasks.length > 0 ? (
          completedTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={() => {}}
              onDelete={deleteTask}
            />
          ))
        ) : (
          <div className="empty-state">
            <div>✓</div>
            <h3>No completed tasks</h3>
            <p>Complete a task to see it here.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CompletedTasks;