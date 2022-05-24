import React from "react";
import "./Task.css";
import { FaCheck, FaTrash, FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  hideAlert,
  seteditTask,
  showAlert,
  toggleCompletedTask,
} from "../../redux/Actions/actions";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const hundelDeleteTask = (id) => {
    dispatch(deleteTask(id));
    dispatch(showAlert("warning", "task has been deleted"));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };

  const hundeltoggleTask = (id) => {
    dispatch(toggleCompletedTask(id));
  };

  const hundelSetEditTask = (task) => {
    dispatch(seteditTask(task));
    dispatch(showAlert("dark", "task set to edit"));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };

  return (
    <div className={`cards ${task.isDone ? "resolved" : ""}`}>
      <button
        className={`resolved-btn ${task.isDone ? "active" : ""} `}
        onClick={() => hundeltoggleTask(task.id)}
      >
        {task.isDone && <FaCheck size={15} />}
      </button>
      <div className="cards-info">
        <h3 className="task">{task.description}</h3>
      </div>
      <button
        className="btn delete-btn"
        onClick={() => hundelDeleteTask(task.id)}
      >
        <FaTrash size={14} />
      </button>
      <button className="btn edit-btn" onClick={() => hundelSetEditTask(task)}>
        <FaPen size={14} />
      </button>
    </div>
  );
};

export default Task;
