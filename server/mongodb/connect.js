import mongoose, { connect } from 'mongoose';


//Connecting our MongoDB
const connectDB = (url) => {
    mongoose.set('strictQuery', true)

    mongoose.connect(url)
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err))
}

export default connectDB;