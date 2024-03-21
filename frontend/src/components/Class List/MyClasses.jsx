import React, { useState, useEffect } from "react";
import { List, Card } from "antd";
import image1 from "../../Images/math.png";
import image2 from "../../Images/chemistry.jpg";
import image3 from "../../Images/wpf_statistics.png";
const MyClasses = () => {
  const [classList, setClassList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/get-all-classes");
        if (!response.ok) {
          throw new Error("Failed to fetch class data");
        }
        const data = await response.json();
        setClassList(data);
      } catch (error) {
        console.error("Error fetching class data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        padding: "20px 0",
        fontFamily: "Poppins",
        width: '100%'
      }}
    >
      <h2 style={{}}>My Classes</h2>
      <Card
        style={{
          boxShadow: "0px 0px 4px 0px #00000040",
        }}
      >
        <List
          header={
            <div style={{ display: "flex" }}>
              <div style={{ flex: 2 }}>Subject</div>
              <div style={{ flex: 1 }}>Classes</div>
              <div style={{ flex: 1 }}>Lecture Taken</div>
              <div style={{ flex: 1 }}>Students</div>
            </div>
          }
          dataSource={classList}
          renderItem={(item) => (
            <List.Item>
              <div style={{ flex: 2 }}>
                <List.Item.Meta
                  avatar={
                    item.subject === "Mathematics" ? (
                      <img
                        src={image1}
                        alt="Math"
                        style={{ width: 30, height: 32 }}
                      />
                    ) : item.subject === "Chemistry" ? (
                      <img
                        src={image2}
                        alt="Physics"
                        style={{ width: 30, height: 32 }}
                      />
                    ) : item.subject === "Statistics" ? (
                      <img
                        src={image3}
                        alt="Default"
                        style={{ width: 30, height: 32 }}
                      />
                    ) : null
                  }
                  title={item.subject}
                  description={item.courses.totallectures}
                />
              </div>
              <div style={{ flex: 1 }}>{item.classes}</div>
              <div style={{ flex: 1 }}>{item.courses.lectureTaken}</div>
              <div style={{ flex: 1 }}>{item.students}</div>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default MyClasses;
