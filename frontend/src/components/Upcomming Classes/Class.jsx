import React from "react";
import "./Class.css";
import clock from "../../Images/clock.png";
import meeting from "../../Images/meeting.png";

const Classes = ({ classData }) => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const classTime = classData.time;

  const isCurrentClass = classTime === currentTime;
  const backgroundColors = {
    currentClass: "lightred",
    otherClasses: ["lightblue", "lightgreen", "lightyellow"],
  };

  const backgroundColor = isCurrentClass
    ? backgroundColors.currentClass
    : backgroundColors.otherClasses[
        Math.floor(Math.random() * backgroundColors.otherClasses.length)
      ];

  const classMainStyle = {
    backgroundColor: backgroundColor,
    borderLeft: `3px solid ${backgroundColor.replace("light", "")}`,
  };

  return (
    <div className="class-main" style={classMainStyle}>
      <div>
        <span>{classData.subject}</span>
        <span>{classData.grade}</span>
      </div>
      <h1>{classData.title}</h1>
      <div>
        <div className="class-time">
          <img src={clock} alt="" />
          <span>{classData.time}</span>
        </div>
        {isCurrentClass && (
          <button className="class-join-btn">
            <img src={meeting} alt="" />
            <span>Join Class</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Classes;
