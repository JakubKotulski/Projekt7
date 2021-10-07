import "./Header.css";
import SearchField from "../SearchField/SearchField";
import SearchIcon from "../SearchIcon/SearchIcon";
import Personalicon from "../PersonalIcon/PersonalIcon";
import Avatar from "../Avatar/Avatar";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <SearchIcon />
        <SearchField />
      </div>
      <div className="header-container">
        <Personalicon src="/bell.png" />
        <Avatar className="your-avatar" src="avatar.png"/>
      </div>
    </div>
  );
};

export default Header;
