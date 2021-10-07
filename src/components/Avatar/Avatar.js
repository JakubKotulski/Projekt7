import "./Avatar.css";

const Avatar = ({ src, className }) => {
  return <img className={className} src={src} alt="Avatar icon"></img>;
};

export default Avatar;
