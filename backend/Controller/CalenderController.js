
const Calender = require('../Model/CalenderModel'); 

const addCalender = async (req, res) => {
  try {
    const { subject, grade, title, time, date } = req.body;

    const newCalender = new Calender({
      subject,
      grade,
      title,
      time,
      date
    });

    await newCalender.save();

    res.status(201).json({ message: 'Calendar entry added successfully' });
  } catch (error) {

    console.error('Error adding calendar entry:', error);
    res.status(500).json({ message: 'Failed to add calendar entry' });
  }
};

const getCalender = async (req, res) => {
    try {
      const { date } = req.body;
      console.log(date);
      const calendars = await Calender.find({ date });
      res.json(calendars);
    } catch (error) {
      console.error('Error fetching calendar entries:', error);
      res.status(500).json({ message: 'Failed to fetch calendar entries' });
    }

}
module.exports ={addCalender,getCalender};
