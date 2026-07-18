import { useEffect, useState } from "react";
import type { Task } from "./types/types";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";


import {
  getTasks,
  addTask,
  completeTask,
  deleteTask,
} from "./services/taskService";


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const loadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };


  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadTasks();
  }, []);


  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();

    await addTask(title, description);

    setTitle("");
    setDescription("");

    loadTasks();
  };


  const handleCompleteTask = async (id: number) => {
    await completeTask(id);

    loadTasks();
  };


  const handleDeleteTask = async (id: number) => {
    await deleteTask(id);

    loadTasks();
  };


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Simple Task Manager
        </h1>


        <TaskForm
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          onSubmit={handleAddTask}
        />



        <div className="space-y-4">

          {tasks.length === 0 ? (

            <p className="text-gray-500">
              No tasks yet.
            </p>

          ) : (

            tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onComplete={handleCompleteTask}
                onDelete={handleDeleteTask}
              />
            ))

          )}

        </div>

      </div>
    </div>
  );
}

export default App;