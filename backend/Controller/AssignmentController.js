const Assignment = require('../Model/AssignmentModel');
const addAssignment=async (req, res) =>{
  try {

    const { assignmentName, submissionPercent, submissionCount, percentMarks, averageMarks } = req.body;
    console.log(req.body);
 
    const newAssignment = new Assignment({
      assignmentName,
      submissionPercent,
      submissionCount,
      percentMarks,
      averageMarks
    });

 
    await newAssignment.save();


    res.status(201).json({ message: 'Assignment added successfully' });
  } catch (error) {

    console.error('Error adding assignment:', error);
    res.status(500).json({ message: 'Failed to add assignment' });
  }
}

const getAllAssignments = async (req, res) => {
    try {
      const assignments = await Assignment.find();
      res.status(200).json(assignments);
    } catch (error) {
      console.error('Error fetching assignments:', error);
      res.status(500).json({ message: 'Failed to fetch assignments' });
    }
  };

module.exports = { addAssignment,getAllAssignments };
