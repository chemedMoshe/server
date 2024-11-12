import mongoose from "mongoose";

export default interface VoteDTO {
    candidateid: mongoose.Types.ObjectId,
    userid: mongoose.Types.ObjectId

}