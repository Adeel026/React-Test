import React, { useState, useEffect } from "react";
import Typography from "@mui/joy/Typography";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Card from "@mui/joy/Card";
import { useCountUp } from "use-count-up";
import CardContent from "@mui/joy/CardContent";
import Grid from "@mui/joy/Grid";

function AssignmentCard() {
  const [assignments, setAssignments] = useState([]);
  const { value: value1 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 40,
  });

  const { value: value2 } = useCountUp({
    isCounting: true,
    duration: 1,
    start: 0,
    end: 40,
  });

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/get-all-assignments"
        );
        const data = await response.json();
        setAssignments(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };

    fetchAssignments();
  }, []);

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
      }}
    >
      <Grid container direction="column" spacing={2}>
        <h2 style={{
          marginLeft: '2rem'
        }}>Last Deliverable</h2>

        <Grid item style={{ padding: "0" }}>
          {assignments.map((assignment, index) => (
            <Card
              key={index}
              style={{
                margin: "0 2rem",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                boxShadow: "0px 0px 4px 0px #00000040",
              }}
            >
              <CardContent
                style={{
                  margin: "20px",
                }}
              >
                <Typography
                  variant="h1"
                  style={{
                    fontFamily: "Poppins",
                    fontWeight: 500,
                    fontSize: "20px",
                    margin: "10px auto",
                  }}
                >
                  {assignment.assignmentName}
                </Typography>
                <Grid container justify="space-between" alignItems="center">
                  <Grid item xs={12} sm={6}>
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 160,
                        margin: "0 auto",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        style={{
                          position: "absolute",
                          fontSize: "12px",
                          top: "30%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        Submission
                      </Typography>
                      <CircularProgressbar
                        value={value1}
                        text={`${assignment.submissionPercent}%`}
                        strokeWidth={8}
                        styles={{
                          path: { stroke: "rgba(164, 29, 48, 1)" },
                          trail: { stroke: "rgba(234, 236, 240, 1)" },
                          text: {
                            fill: "rgba(16, 24, 40, 1)",
                            fontSize: "12px",
                            fontWeight: "bold",
                          },
                        }}
                      />
                      <div style={{ color: "rgba(71, 84, 103, 1)" }}>
                        Submissions:{assignment.submissionCount}/100
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {" "}
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        maxWidth: 160,
                        margin: "0 auto",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        style={{
                          position: "absolute",
                          fontSize: "12px",
                          top: "30%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        Percent Marks
                      </Typography>
                      <CircularProgressbar
                        value={value2}
                        text={`${assignment.percentMarks}%`}
                        strokeWidth={8}
                        styles={{
                          path: { stroke: "rgba(164, 29, 48, 1)" },
                          trail: { stroke: "rgba(234, 236, 240, 1)" },
                          text: {
                            fill: "rgba(16, 24, 40, 1)",
                            fontSize: "12px",
                            fontWeight: "bold",
                          },
                        }}
                      />
                      <div style={{ color: "rgba(71, 84, 103, 1)" }}>
                        Average Marks:{assignment.averageMarks}/100
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default AssignmentCard;
