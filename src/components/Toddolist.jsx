import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    if (tasksFromLocalStorage) {
      setTasks(tasksFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      setTasks([
        ...tasks,
        {
          id: uuidv4(),
          name: inputValue,
          completed: false,
        },
      ]);
      setInputValue("");
    }
  };

  const handleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleEdit = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, editing: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleSave = (id, newName) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, name: newName, editing: false } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full flex flex-col mt-6">
      <h1 className="text-xl font-semibold mb-4">To-Do List</h1>
      <form className="flex flex-col mb-2" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Add task"
          className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        />
        <button
          type="submit"
          className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-red-600 hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-zinc-900">
          Add
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`flex items-center justify-between p-2 border-b border-gray-300 ${
              task.completed ? "line-through text-gray-500" : ""
            }`}>
            {task.editing ? (
              <input
                type="text"
                defaultValue={task.name}
                className="p-2 border border-gray-300 rounded-lg w-full"
                onBlur={(event) => handleSave(task.id, event.target.value)}
                onKeyDown={(event) =>
                  event.key === "Enter" &&
                  handleSave(task.id, event.target.value)
                }
              />
            ) : (
              <span>{task.name}</span>
            )}
            <div className="flex items-center">
              <button
                className="mr-2 text-green-500"
                onClick={() => handleComplete(task.id)}>
                <FaCheck />
              </button>
              <button
                className="mr-2 text-blue-
                500"
                onClick={() => handleEdit(task.id)}>
                <FaEdit />
              </button>
              <button
                className="text-red-500"
                onClick={() => handleDelete(task.id)}>
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
