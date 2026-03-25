import React,{useState} from "react";
import "./index.css";
import Card from "./containers/card";

export default function App() {
  const [taskList, settaskList] = useState([]);
  const [task, setTask] = useState("");

  const deleteTask = (index) => {
    const updatedList = taskList.filter((item, i) => i !== index);
    settaskList(updatedList);
  };

  const editTask = (index) => {
    const newTask = prompt("Edit task:", taskList[index]);
    if (newTask !== null && newTask.trim() !== "") {
      const updatedList = [...taskList];
      updatedList[index] = newTask;
      settaskList(updatedList);
    }
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1 className="title">Todo List</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Add a new task..."
            className="todo-input"
            value={task}
            onChange={(e)=>{
              setTask(e.target.value);
            }}
          />
          <button 
          className="add-btn"
          onClick={()=>{
            if (task.trim() !== "") {
              settaskList([...taskList, task]);
              setTask("");
            }
          }}
          >Add</button>
        </div>
        <ul className="todo-list">
          {taskList.map((item, index)=>{
            return <Card key={index} task={item} index={index} onDelete={deleteTask} onEdit={editTask}/>
          })}
        </ul>
      </div>
    </div>
  );
}