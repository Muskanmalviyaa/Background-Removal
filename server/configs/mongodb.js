// import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected', () => {
//         console.log("Database Connected")
//     })
//     await mongoose.connect(`${process.env.MONGODB_URI}`)
// }

// export default connectDB;
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Event listener for successful connection
    mongoose.connection.on('connected', () => {
      console.log('Database Connected');
    });

    // Event listener for connection errors
    mongoose.connection.on('error', (err) => {
      console.error('Database Connection Error:', err);
    });

    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error('Failed to Connect to MongoDB:', err);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;