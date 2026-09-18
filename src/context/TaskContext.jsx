import { createContext, useContext, useEffect, useState } from "react";

const TaskContext = createContext();

const defaultTasks = [
  {
    id: 1,
    description: "Complete React assignment",
    priority: "High",
    category: "College",
    due: "28 Aug 2026",
    status: "Pending",
  },
  {
    id: 2,
    description: "Build portfolio website",
    priority: "Medium",
    category: "Development",
    due: "30 Aug 2026",
    status: "Pending",
  },
  {
    id: 3,
    description: "Submit project report",
    priority: "High",
    category: "College",
    due: "25 Aug 2026",
    status: "Completed",
  },
];

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    return savedTasks ? JSON.parse(savedTasks) : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
      status: "Pending",
    };

    setTasks((previousTasks) => [
      ...previousTasks,
      newTask,
    ]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === Number(id)
          ? {
              ...task,
              ...updatedTask,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.filter(
        (task) => task.id !== Number(id)
      )
    );
  };

  const completeTask = (id) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === Number(id)
          ? {
              ...task,
              status: "Completed",
            }
          : task
      )
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}