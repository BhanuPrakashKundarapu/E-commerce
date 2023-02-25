// import mongoose=re
import mongoose from "mongoose";
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to mongodb ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgYellow.white);
  }
};

export default connectdb;
