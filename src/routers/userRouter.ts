import { Request,Response } from "express";
import { Register } from "../Models/DTO/UserDTO";
import { createUser, loginUser } from "../Services/UserService";

export const login = async(req:Request,res:Response)=>{
    try {
        const loggedUser = await loginUser(req.body)
        
        res.status(200).json(loggedUser)
      } catch (err) {
        res.status(400).json((err as Error).message)
      }
}

export const register = async(req:Request<Register>,res:Response)=>{
    try {
        
      
        await createUser(req.body)
        res.status(201)
    } catch (error) {
        res.status(400).json(error)
    }
}