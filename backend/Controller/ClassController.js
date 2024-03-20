const MyClass=require("../Model/ClassModel");

const storeClassData = async (req, res) => {
    try {
      const { subject, classes, students, courses } = req.body;
      console.log(req.body);
      const newClass = new MyClass({
        subject,
        classes,
        students,
        courses
      });
      console.log(newClass);
      await newClass.save();
  
      res.status(201).json({ message: 'Class data stored successfully' });
    } catch (error) {
      console.error('Error storing class data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };


  const getAllClasses = async (req, res) => {
    try {
      const allClasses = await MyClass.find();
  
      res.status(200).json(allClasses); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  module.exports={storeClassData,getAllClasses};