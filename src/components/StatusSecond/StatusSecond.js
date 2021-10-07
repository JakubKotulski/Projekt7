import "./StatusSecond.css";

const StatusSecond = ({ idName, value }) => {
  return (
    <div className="status-second">
      <div className="status-second-collaps" id={idName}></div>
      <span className="status-second-text">{value}</span>
    </div>
  );
};

export default StatusSecond;
