import React from "react";
import { Card } from "antd";

function Announcements() {
  const cardStyle = {
    // width: "100%",
    // maxWidth: "auto",
    // minWidth:"350px",
    height: "auto",
    border: 'none',
    fontFamily: "Poppins, sans-serif",
    overflowY: "auto",
    height: "61vh",
    overflowX: "hidden",
  };

  const scrollbarStyle = `
  ::-webkit-scrollbar {
    width: 8px; 
    height: 1px; 
  }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background:rgba(234, 236, 240, 1);
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  `;

  return (
    <div
      style={{
        borderRadius: "15px",
        width: '100%',
        minWidth: '350px'
      }}
    >
      <h2>Announcements</h2>
      <style>{scrollbarStyle}</style>
      <div
        style={{
          borderTop: "4px solid rgba(164, 29, 48, 1)",
          padding: '10px',
          borderRadius: "10px",
          backgroundColor: "white",
          boxShadow: "0px 0px 4px 0px #00000040",
        }}
      >
        <Card style={cardStyle}>
          <ul style={{ padding: "10px", margin: 0 }}>
            <li>
              We have an upcoming professional development workshop on [topic]
              scheduled for [date]. Please mark your calendars, and more details
              will follow.
              <br />
              <br />
            </li>

            <li>
              We are excited to announce an update to the LMS platform. New
              features and improvements have been added to enhance your teaching
              experience. Explore and let us know your feedback!
              <br />
              <br />
            </li>

            <li>
              Parent-Teacher meetings are scheduled for [date]. Please ensure
              you've communicated with parents and are prepared to discuss
              student progress. Thank you for your cooperation.
              <br />
              <br />
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

export default Announcements;
