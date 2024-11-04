import React, { useState, useEffect } from "react";
import "./Statistic.css";

function Statistic() {
  const [visitors, setVisitors] = useState(0);
  const [leavers, setLeavers] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitors((prev) => prev + Math.floor(Math.random() * 10));
      setLeavers((prev) => prev + Math.floor(Math.random() * 5));
    }, 3000);

    const timeInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);
  return (
    <div>
      <div className="dashboardcontainer">
        <h1 style={{textAlign:'center'}}>Statistics of Site Visitors and Abandoners</h1><br /> <br />
        <h3>Current Time: {currentTime}</h3> <br />
        <div className="statistics">
          <div className="stat">
            <h3>Visitors Today: {visitors}</h3>
          </div>
          <div className="stat">
            <h3>Leavers Today: {leavers}</h3>
          </div>
        </div>
        <div className="scale">
          <h3>Scale</h3>
          <div className="scale-bar">
            <div
              className="visitors"
              style={{ width: `${visitors % 100}%` }}
            ></div>
            <div
              className="leavers"
              style={{ width: `${leavers % 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
