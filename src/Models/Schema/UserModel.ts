import mongoose, { Schema, Types } from "mongoose";

export interface IUser extends Document{
    username:string,
    password:string,
    isAdmin?:boolean,
    hasVoted:boolean,
    votedFor:Types.ObjectId|null
}
 const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    hasVoted: {
        type: Boolean,
        default: false,
    },
    votedFor: {
        type: Schema.Types.ObjectId,
        ref: "Candidate",  
        default: null  
    },
});

export default mongoose.model<IUser>("User", userSchema);