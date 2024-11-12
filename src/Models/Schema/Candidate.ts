import mongoose, { Schema, Types } from "mongoose";

export interface ICandidate extends Document {
    name: string,
    image: string,
    voted: number,
}
const candidateSchema = new Schema<ICandidate>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: String,
    voted: {
        type: Number,
        default: 0
    }
});

export default mongoose.model<ICandidate>("Candidate", candidateSchema);