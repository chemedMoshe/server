import { Router } from "express";
import { addVote } from "../routers/votes";
import verifyUser from "../Middlewares/verifyUser";
const router = Router()

router.post('/add',verifyUser,addVote)

export default router