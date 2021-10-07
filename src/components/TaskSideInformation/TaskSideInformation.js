import "./TaskSideInformation.css";
import TextColor from "../TextColor/TextColor";
import AddTaskButton from "../AddTaskButton/AddTaskButton";
import { useState } from "react";

const TaskSideInformation = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [status2, setStatus2] = useState("");

  const getTitle = (event) => {
    setTitle(event.target.value);
  };

  const getStatus = (event) => {
    setStatus(event.target.value);
  };

  const getStatus2 = (event) => {
    setStatus2(event.target.value);
  };

  const postElement = () => {
    console.log(status, status2, title);
  };

  return (
    <>
      <div className="task-side-information">
        You've got <TextColor value="7 tasks" className="pink" /> today
      </div>
      <form className="form" onSubmit={postElement}>
        <input type="text" placeholder="title" onChange={getTitle}></input>
        <input type="text" placeholder="status" onChange={getStatus}></input>
        <input type="text" placeholder="second status" onChange={getStatus2}></input>
        <AddTaskButton />
      </form>
    </>
  );
};

export default TaskSideInformation;
