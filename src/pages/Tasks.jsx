import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function Tasks() {
  const {
    tasks,
    completeTask,
    deleteTask,
  } = useTasks();

  const [filter, setFilter] = useState("All");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") {
      return true;
    }

    return task.status === filter;
  });

  return (
    <section>
      <div className="page-header">
        <div>
          <p className="page-label">TASK MANAGER</p>
          <h1>All Tasks</h1>
          <p>View and manage all your tasks.</p>
        </div>
      </div>

      <div className="filter-bar">
        {["All", "Pending", "Completed"].map(
          (filterOption) => (
            <button
              key={filterOption}
              className={
                filter === filterOption
                  ? "filter active"
                  : "filter"
              }
              onClick={() => setFilter(filterOption)}
            >
              {filterOption}
            </button>
          )
        )}
      </div>

      <div className="task-grid">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={completeTask}
              onDelete={deleteTask}
            />
          ))
        ) : (
          <div className="empty-state">
            <div>📋</div>
            <h3>No tasks found</h3>
            <p>There are no tasks in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tasks;