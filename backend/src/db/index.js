import mongoose from "mongoose";
import { app } from "../app";
import {DB_NAME} from '../constants.js'

const connectDB=async()=>{
    try{

        const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MONGODB CONNECTED || DB HOST : ${connectioninstance.connection.host}`)
        app.on("error",(error)=>{
            console.log(`ERR : `,error)
            throw error;
        })
    }catch(error){
        console.log("MONGODB CONNECTION FAILED : ", error)
        process.exit(1)
    }
}

export default connectDB;













// import mongoose from "mongoose";
// import {app} from '../app.js'
// import {DB_NAME} from '../constants.js'


// const connectDB=async()=>{
//     try{
//         const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDb connected !! DB HOST: ${connectionInstance.connection.host}`)
//         app.on('error',(error)=>{
//             console.log('ERRR :',error)
//             throw error;
//         })
//     }catch(error) {
//         console.log('MONGODB CONNECTION FAILED: ',error);
//         process.exit(1)
//     }
// }
// export default connectDB;