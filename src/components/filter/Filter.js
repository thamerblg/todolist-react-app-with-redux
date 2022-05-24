import React from "react";
import { useDispatch } from "react-redux";
import { filterTasks } from "../../redux/Actions/actions";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();

  const hundelFilterTasks = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <footer>
      <div className="menu-filter">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="all"
            defaultChecked
            onClick={hundelFilterTasks}
          />
          <label className="form-check-label">All</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="completed"
            onClick={hundelFilterTasks}
          />
          <label className="form-check-label">Completed</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="uncompleted"
            onClick={hundelFilterTasks}
          />
          <label className="form-check-label">Uncompleted</label>
        </div>
      </div>
    </footer>
  );
};

export default Filter;
