import { Col, Row } from "react-bootstrap";
import "./Content.css";
import TaskSideInformation from "../TaskSideInformation/TaskSideInformation";
import TaskHeader from "../TaskHeader/TaskHeader";
import TaskTheme from "../TaskTheme/TaskTheme";
import Status from "../Status/Status";
import StatusSecond from "../StatusSecond/StatusSecond";
import Spectators from "../Spectators/Spectators";
import ContextBox from "../ContextField/ContextField";

const Content = () => {
  return (
    <>
      <Row id="content-padding">
        <Col xs={9}>
          <TaskSideInformation />
          <TaskHeader value="On Hold" />
          <div className="task-box">
            <TaskTheme value="Evaluate the addition and deletion of user IDs." />
            <Status idName="status-orange" value="Pending" />
            <StatusSecond idName="status-second-green" value="Minor" />
            <Spectators more={true} />
            <ContextBox />
          </div>

          <div className="task-box">
            <TaskTheme value="Identify the implementation team." />
            <Status idName="status-blue" value="In Progress" />
            <StatusSecond idName="status-second-yellow" value="Normal" />
            <Spectators threeSpec={true} />
            <ContextBox />
          </div>

          <div className="task-box">
            <TaskTheme value="Batch schedule download/process." />
            <Status idName="status-orange" value="Pending" />
            <StatusSecond idName="status-second-red" value="Critical" />
            <Spectators twoSpec={true} />
            <ContextBox />
          </div>

          <div className="task-box">
            <TaskTheme value="Evaluate the addition and deletion of user IDs." />
            <Status idName="status-orange" value="Pending" />
            <StatusSecond idName="status-second-green" value="Minor" />
            <Spectators oneSpec={true} />
            <ContextBox />
          </div>
          <div className="completed-section">
            <TaskHeader value="Completed" />
            <Status idName="status-red" value="Inactive"/>
          </div>
          <div className="opacity-box">
          <div className="task-box">
            <TaskTheme value="Install console machines and prerequisite software." />
            <Status idName="status-green" value="Completed" />
            <StatusSecond idName="status-second-red" value="Critical" />
            <Spectators more={true} />
            <ContextBox />
          </div>

          <div className="task-box">
            <TaskTheme value="Design a relatively simple business system" />
            <Status idName="status-orange" value="Pending" />
            <StatusSecond idName="status-second-red" value="Critical" />
            <Spectators threeSpec={true} />
            <ContextBox />
          </div>

          <div className="task-box">
            <TaskTheme value="Design a relatively simple business system" />
            <Status idName="status-red" value="Canceled" />
            <StatusSecond idName="status-second-green" value="Minor" />
            <Spectators twoSpec={true} />
            <ContextBox />
          </div>
          </div>
        </Col>
        <Col xs={3}>siema</Col>
      </Row>
    </>
  );
};

export default Content;
