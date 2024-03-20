import React, { useState } from "react";
import MyCalendar from "./MyCalendar";
import Classes from "./Class";
import "./UpcommingClasses.css";

const UpcommingClasses = () => {
  const dummyData = [
    {
      subject: "Physics",
      grade: "Class-6",
      title: "Law of Thermodynamics",
      time: "8:00am - 9:30am",
      date: "2024-03-25",
      image: "path/to/image1.png",
    },
    {
      subject: "Mathematics",
      grade: "Class-8",
      title: "Algebra",
      time: "10:00am - 11:30am",
      date: "2024-03-25",
      image: "path/to/image2.png",
    },
    {
      subject: "Biology",
      grade: "Class-10",
      title: "Cell Biology",
      time: "1:00pm - 2:30pm",
      date: "2024-03-26",
      image: "path/to/image3.png",
    },
    {
      subject: "Chemistry",
      grade: "Class-11",
      title: "Chemical Reactions",
      time: "3:00pm - 4:30pm",
      date: "2024-03-26",
      image: "path/to/image4.png",
    },
  ];

  return (
    <div className="upcoming-classes">
      <h2>Upcomming Classes</h2>
      <div>
        <MyCalendar />
        <div>
          {dummyData.map((classData, index) => (
            <Classes key={index} classData={classData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcommingClasses;
