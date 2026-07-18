import type { Task } from "../types/types";

const API_URL = import.meta.env.VITE_API_URL;

export const getTasks = async (): Promise<Task[]> => {
  const response = await fetch(
    `${API_URL}/get_tasks.php`
  );

  return response.json();
};


export const addTask = async (
  title: string,
  description: string
) => {
  const response = await fetch(
    `${API_URL}/add_task.php`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
      }),
    }
  );

  return response.json();
};


export const completeTask = async (
  id: number
) => {
  const response = await fetch(
    `${API_URL}/update_task.php`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    }
  );

  return response.json();
};


export const deleteTask = async (
  id: number
) => {
  const response = await fetch(
    `${API_URL}/delete_task.php`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
      }),
    }
  );

  return response.json();
};