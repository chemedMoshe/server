import { connect } from "mongoose"

export const connectTomongo = ()=>{
    try {
        connect(process.env.DB_URI as string)
        console.log('connected to mongodb');
        
    } catch (error) {
        console.log("Can't connect to mongodb");
        
    }
}