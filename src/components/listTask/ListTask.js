import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "../task/Task";

const ListTask = () => {
  const taskList = useSelector((state) => state.listOfTask);
  const taskfiltred = useSelector((state) => state.filtredList);

  const [list, setList] = useState([]);

  useEffect(() => {
    setList(taskfiltred);
  }, [taskfiltred]);

  useEffect(() => {
    setList(taskList);
  }, [taskList]);

  return (
    <div className="list-cards">
      {list.map((task, index) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};

export default ListTask;
