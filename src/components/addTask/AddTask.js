import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./AddTask.css";
import {
  addTask,
  editTask,
  hideAlert,
  showAlert,
} from "../../redux/Actions/actions";

const AddTask = () => {
  const [descTask, setDescTask] = useState("");

  const isEditing = useSelector((state) => state.isEditing);
  const taskToEdit = useSelector((state) => state.taskToEdit);

  const dispatch = useDispatch();

  const hundelSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    if (descTask == "" || descTask.trim().length == 0) {
      dispatch(showAlert("danger", "Please enter value"));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
    } else if (isEditing) {
      dispatch(editTask(taskToEdit, descTask));
      dispatch(showAlert("info", "Task edited"));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
      setDescTask("");
    } else {
      dispatch(showAlert("success", "Task added to the list"));
      setTimeout(() => {
        dispatch(hideAlert());
      }, 3000);
      const newTask = {
        id: Date.now(),
        description: descTask,
        isDone: false,
      };
      if (descTask.length > 0) {
        dispatch(addTask(newTask));
        setDescTask("");
      }
    }
  };

  useEffect(() => {
    taskToEdit && setDescTask(taskToEdit.description);
  }, [taskToEdit]);

  return (
    <form onSubmit={(e) => hundelSubmit(e)}>
      <div id="input">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new Task..."
          value={descTask || ""}
          onChange={(e) => setDescTask(e.target.value)}
        />
        <button className="submit-btn">{isEditing ? "Edit" : "Submit"}</button>
      </div>
    </form>
  );
};

export default AddTask;
