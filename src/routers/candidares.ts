import {Request,Response}from 'express'
import { getCandidatesListService, seedInitial } from '../Services/candidateService'
import { get } from 'mongoose'

export const seed = async(req:Request,res:Response)=>{
    try{
    await seedInitial()
    res.sendStatus(201)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}

export const getCandidatesList = async(req:Request,res:Response)=>{
    try{
        const cands = await getCandidatesListService()
        res.json(cands)
    }catch(error){
        console.log(error)
        res.sendStatus(500)
    }
}