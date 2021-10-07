import "./TextColor.css";

const TextColor = ({ value, className }) => {
  return <span className={className}>{value}</span>;
};

export default TextColor;
