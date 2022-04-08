import "./task.css";
import stars from "../../svgs/star.svg";
import starfill from "../../svgs/starfill.svg";
import { useState } from "react";

export default function Task() {
  const [star, setStar] = useState(false);
  console.log(star);
  return (
    <div className={star ? "task noStar " : "task"}>
      <div className="orderTop">
        <div className="orderNum">Order Number</div>
        <div className="orderTime">Time</div>
      </div>

      <div className="orderMiddle">
        <div className="taskName">Task name</div>
        {star ? (
          <div className="starIcon">
            <img src={stars} alt="" onClick={() => setStar(false)} />
          </div>
        ) : (
          <div className="starIcon">
            <img src={starfill} alt="" onClick={() => setStar(true)} />
          </div>
        )}
      </div>

      <div className="orderBottom">Task Description</div>
    </div>
  );
}
