import "./leftBar.css";
import collapseIcon from "../../svgs/collapseInbox.svg";
import newTask from "../../svgs/newTask.svg";
import close from "../../svgs/close.svg";
import Task from "../tasks/Task";

export default function LeftBar() {
  return (
    <div className="leftBar">
      <div className="leftBarTop">
        <div className="collapseInB">
          <div className="collapseInBHead">
            <div className="inBHeadText">Collapse Inbox</div>
            <div className="inBHeadIcon">
              <img src={collapseIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="collapseInB">
          <div className="collapseInBHead">
            <div className="inBHeadText">Create New Task</div>
            <div className="inBHeadIcon">
              <img src={newTask} alt="" />
            </div>
          </div>
        </div>
        <div className="leftTSearch">
          <div className="search">
            <input type="text" placeholder="Search" className="searchInput" />
          </div>
          <div className="searchClose">
            <img src={close} alt="" />
          </div>
        </div>
      </div>
      <div className="taskLists">
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </div>
  );
}
