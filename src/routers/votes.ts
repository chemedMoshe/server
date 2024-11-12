import { Request,Response } from "express";
import { votes } from "../Services/votes";
import VoteDTO from "../Models/DTO/Votes";

export const addVote = async(req:Request,res:Response)=>{
    try {
        
        await votes(req.body)
        res.sendStatus(201)
      } catch (err) {
        console.log(err);
        
        res.status(400).json((err as Error).message)
      }
}