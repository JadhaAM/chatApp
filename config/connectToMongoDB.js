const mongoose = require("mongoose");
const process = require("process");

const connectToMongoDB = async () => {
  try {
  const connect=  await mongoose.connect("mongodb://localhost:27017/chatApp");
    console.log("MongoDB connected!!");
  } catch (error) {
    console.log("Failed to connect to MongoDB", error);
  }
};



module.exports = connectToMongoDB;
