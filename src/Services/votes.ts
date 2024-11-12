import VoteDTO from "../Models/DTO/Votes";
import userDB, { IUser } from "../Models/Schema/UserModel";
import candidateDB from "../Models/Schema/Candidate";

export const votes = async (newVotes: VoteDTO) => {
    const thisUser = await userDB.findOne({ _id: newVotes.candidateid})

    if (!thisUser) throw new Error('User not found')
    if (thisUser.hasVoted!) throw new Error('User has already voted')

    thisUser.hasVoted = true
    thisUser.votedFor = newVotes.candidateid
    const thisCandidate = await candidateDB.findById({_id:newVotes.userid})

    if (!thisCandidate) throw new Error('Candidate not found')

    thisCandidate.voted++

    await thisCandidate.save()
    await thisUser.save()
}