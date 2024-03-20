const mongoose=require('mongoose');
const DB='mongodb+srv://madeel5309:kahAwxHJzvmSOMQr@cluster0.c81unhf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function connectToDatabase() {
    try {
      await mongoose.connect(DB, {
        useNewUrlParser: true,
      
        useUnifiedTopology: true
       
      });
      console.log("Successfully connected to MongoDB!");
    } catch (err) {
      console.error("Error connecting to MongoDB:", err);
    }
  }
  
connectToDatabase();
module.exports=connectToDatabase



