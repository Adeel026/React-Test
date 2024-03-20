const express = require("express");
const router = express.Router(); 
const connectToDatabase = require("../database/connection"); 

const{addAssignment}=require("../Controller/AssignmentController");
router.post('/add-assignment',addAssignment);


const{getAllAssignments}=require("../Controller/AssignmentController");
router.get('/get-all-assignments',getAllAssignments)

const{storeClassData}=require("../Controller/ClassController");
router.post('/storeData',storeClassData);


const{getAllClasses}=require("../Controller/ClassController");
router.get('/get-all-classes',getAllClasses);


const{addCalender}=require("../Controller/CalenderController");
router.post('/add-calender',addCalender);

const{getCalender}=require("../Controller/CalenderController");
router.get('/get-calendar',getCalender);


module.exports = router; 
