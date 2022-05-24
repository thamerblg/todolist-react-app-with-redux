import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddTask from "./components/addTask/AddTask";
import Alert from "./components/alert/Alert";
import Filter from "./components/filter/Filter";
import ListTask from "./components/listTask/ListTask";
import { deleteAllTasks, hideAlert, showAlert } from "./redux/Actions/actions";

function App() {
  const taskList = useSelector((state) => state.listOfTask);
  const alertBlock = useSelector((state) => state.alertBlock);

  const dispatch = useDispatch();

  const date = new Date();
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const clearAll = (e) => {
    e.preventDefault();
    dispatch(deleteAllTasks());
    dispatch(showAlert("warning", "All tasks has been deleted"));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };

  return (
    <>
      <h1 className="title">Todo-list app</h1>
      <main>
        <div id="wrapper">
          <header>
            <h2 className="date">
              <Moment format="dddd DD MMM YYYY">{date}</Moment>
            </h2>
            <p className="time">{time}</p>
            <p className="task-count">
              You have {taskList.length}{" "}
              {taskList.length > 1 ? "tasks" : "task"} to do today
            </p>
            <AddTask />
            {alertBlock.show && (
              <Alert type={alertBlock.type} msg={alertBlock.msg} />
            )}
          </header>
          <ListTask />
          {taskList.length > 0 && (
            <button className="clear-all" onClick={(e) => clearAll(e)}>
              Clear all tasks
            </button>
          )}
          {taskList.length > 0 && <Filter />}
        </div>
      </main>
    </>
  );
}

export default App;
