import "./TaskSideInformation.css";
import TextColor from "../TextColor/TextColor";
import AddTaskButton from "../AddTaskButton/AddTaskButton";

const TaskSideInformation = () => {
  return (
    <div className="task-side-information">
      You've got <TextColor value="7 tasks" className="pink" /> today
      <AddTaskButton />
    </div>
  );
};

export default TaskSideInformation;
