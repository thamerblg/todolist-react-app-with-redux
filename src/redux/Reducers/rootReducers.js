import {
  ADD_TASK,
  DELETE_ALL_TASKS,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
  HIDE_ALERT,
  SET_EDIT_TASK,
  SHOW_ALERT,
  TOGGLE_COMPLETED_TASK,
} from "../Constants/actions-types";

const initialState = {
  listOfTask: [
    { id: 1, description: "learn html", isDone: true },
    { id: 2, description: "learn css", isDone: true },
    { id: 3, description: "learn reactJs", isDone: false },
    { id: 4, description: "learn nodeJS", isDone: false },
  ],
  isEditing: false,
  taskToEdit: [],
  filtredList: [],
  alertBlock: { show: false, type: "", msg: "" },
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        listOfTask: [...state.listOfTask, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        listOfTask: state.listOfTask.filter(
          (item) => item.id !== action.payload
        ),
      };
    case TOGGLE_COMPLETED_TASK:
      return {
        ...state,
        listOfTask: state.listOfTask.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      };
    case SET_EDIT_TASK:
      return {
        ...state,
        isEditing: true,
        taskToEdit: action.payload,
      };
    case EDIT_TASK:
      return {
        ...state,
        listOfTask: state.listOfTask.map((item) =>
          item.id === action.payload.task.id
            ? { ...item, description: action.payload.desc }
            : item
        ),
        isEditing: false,
        taskToEdit: [],
      };
    case DELETE_ALL_TASKS:
      return {
        ...state,
        listOfTask: [],
      };
    case FILTER_TASKS:
      return {
        ...state,
        filtredList:
          action.payload === "completed"
            ? state.listOfTask.filter((item) => item.isDone)
            : action.payload === "uncompleted"
            ? state.listOfTask.filter((item) => !item.isDone)
            : state.listOfTask,
      };
    case SHOW_ALERT:
      return {
        ...state,
        alertBlock: {
          show: true,
          type: action.payload.t,
          msg: action.payload.m,
        },
      };
    case HIDE_ALERT:
      return {
        ...state,
        alertBlock: { show: false, type: "", msg: "" },
      };
    default:
      return state;
  }
};

export default rootReducer;
