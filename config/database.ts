import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://admin:password@localhost:27017/MarketPlace?authSource=admin');
    console.log("mongo_db_connected_sucessfully");
  } catch (err) {
    console.error("error_connecting_mongodb", err);
    process.exit(1);
  }
};

mongoose.connection.on("error", (err) => {
  console.error("error_connecting_mongo_db", err);
});

mongoose.connection.once("open", () => {
  console.log("mongo_db_connected");
});

export default connectDB;
