import { useEffect, useState } from "react";
import axios from "axios";

const Todo = () => {
  const [inputs, setInputs] = useState({
    task: "",
    date: "",
    status: false,
  });

  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchTasks = () => {
    axios
      .get("http://localhost:5000/todo/get/tasks")
      .then((res) => setTasks(res.data.tasks))
      .catch((err) => console.error("Error fetching tasks:", err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addTask = () => {
    axios
      .post("http://localhost:5000/todo/add/task", inputs)
      .then(() => {
        fetchTasks();
        setInputs({ task: "", date: "", status: false });
      })
      .catch((error) => console.error("Error adding task:", error));
  };

  const handleEdit = (_id) => {
    const task = tasks.find((task) => task._id === _id);
    setInputs({
      _id: task._id,
      task: task.task,
      date: task.date ? new Date(task.date).toISOString().split("T")[0] : "",
      status: task.status,
    });
    setIsModalOpen(true);
  };

  const updateTask = () => {
    axios
      .put(`http://localhost:5000/todo/update/task/${inputs._id}`, inputs)
      .then(() => {
        fetchTasks();
        closeModal();
      })
      .catch((err) => console.error("Error updating task:", err));
  };

  const handleDelete = (_id) => {
    axios
      .delete(`http://localhost:5000/todo/delete/task/${_id}`)
      .then(() => fetchTasks())
      .catch((err) => console.error("Error deleting task:", err));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInputs({ task: "", date: "", status: false });
  };

  return (
    <>
      <div className="table">
        <h2>To-Do List</h2>

        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No entries yet.
                </td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task._id}>
                  <td>{task.task}</td>
                  <td>{task.date}</td>
                  <td>{task.status ? "Completed" : "Pending"}</td>
                  <td>
                    <button
                      className="bg-warning"
                      onClick={() => handleEdit(task._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-danger"
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <h3>Add New Task</h3>
        <div className="flex-col to-do">
          <label>
            Task:
            <input
              type="text"
              name="task"
              placeholder="Enter Task"
              value={inputs.task}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={inputs.date}
              onChange={handleChange}
            />
          </label>
          <label>
            Is Completed?:
            <input
              type="checkbox"
              name="status"
              checked={inputs.status}
              onChange={handleChange}
            />
          </label>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Task</h3>
            <input
              type="text"
              name="task"
              value={inputs.task}
              onChange={handleChange}
              placeholder="Enter Task"
            />
            <input
              type="date"
              name="date"
              value={inputs.date}
              onChange={handleChange}
            />
            <label>
              Is Completed?:
              <input
                type="checkbox"
                name="status"
                checked={inputs.status}
                onChange={handleChange}
              />
            </label>
            <button onClick={updateTask}>Update Task</button>
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo;
