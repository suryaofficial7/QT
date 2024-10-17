import mongoose from "mongoose";

export const db = mongoose.connect(`mongodb://127.0.0.1:27017/quicktrack`)
.then((data)=>{console.log(`Connected to ${data.connection.host}`)})
.catch((e)=>{console.log(e)})

