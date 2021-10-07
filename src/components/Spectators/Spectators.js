import "./Spectators.css";

const Spectators = ({ oneSpec, twoSpec, threeSpec, more }) => {
  return (
    <div className="spectators">
      {oneSpec && (
        <div className="oval first-spectator">
          <img src="/person1.png" alt="Spectator"></img>
        </div>
      )}
      {twoSpec && (
        <>
          <div className="oval first-spectator">
            <img src="/person1.png" alt="Spectator"></img>
          </div>
          <div className="oval second-spectator">
            <img src="/person2.png" alt="Spectator"></img>
          </div>
        </>
      )}
      {threeSpec && (
        <>
          <div className="oval first-spectator">
            <img src="/person1.png" alt="Spectator"></img>
          </div>
          <div className="oval second-spectator">
            <img src="/person2.png" alt="Spectator"></img>
          </div>
          <div className="oval third-spectator">
            <img src="/person3.png" alt="Spectator"></img>
          </div>
        </>
      )}
      {more && (
        <>
          <div className="oval first-spectator">
            <img src="/person1.png" alt="Spectator"></img>
          </div>
          <div className="oval second-spectator">
            <img src="/person2.png" alt="Spectator"></img>
          </div>
          <div className="oval third-spectator">
            <img src="/person3.png" alt="Spectator"></img>
          </div>
          <div className = "oval more">8+</div>
        </>
      )}
    </div>
  );
};

export default Spectators;
