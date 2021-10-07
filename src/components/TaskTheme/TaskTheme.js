import "./TaskTheme.css";

const TaskTheme = ({ value }) => {
  return (
    <div className="task-theme">
      <div className="collaps"></div>
      <span className="task-theme-text">{value}</span>
    </div>
  );
};

export default TaskTheme;
