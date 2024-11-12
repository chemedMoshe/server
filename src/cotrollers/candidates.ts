import { Router } from "express";
import { getCandidatesList, seed } from "../routers/candidares";
import verifyUser from "../Middlewares/verifyUser";

const router = Router()

router.post('/seed',seed)

router.post('/login',()=>{})

router.post('/register',()=>{})

router.get('/',verifyUser,getCandidatesList)

export default router