import { ICandidate } from "../Models/Schema/Candidate";
import Candidate  from "../Models/Schema/Candidate";
export const seedInitial = async () => {
try {
const cands = [
    {
      name: "John",
      image: "https://randomuser.me/api/portraits/med/men/81.jpg",
    },
    {
      name: "Johnny",
      image: "https://randomuser.me/api/portraits/med/men/13.jpg",
    },
    {
      name: "Johnnyiahoo",
      image: "https://randomuser.me/api/portraits/med/men/83.jpg",
    },
    {
      name: "Johnniel",
      image: "https://randomuser.me/api/portraits/med/men/0.jpg",
    },
    {
      name: "Johnnyia",
      image: "https://randomuser.me/api/portraits/med/men/6.jpg",
    },
  ];
  cands.forEach(async (cand) => {
    const newCand = new Candidate(cand);
    await newCand.save();
  });
} catch (error) {
  console.log(error);
}

}

export const getCandidatesListService = async () => {
    try {
        const cands = await Candidate.find()
        return cands
    } catch (error) {
        console.log(error)
    }
}
