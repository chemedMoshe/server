import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export default (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers['authorization']
        if (!token) {
            res.status(401).json({ Error: "Token must be provided" })
            return
        }

        const payload = jwt.verify(token, process.env.JWT_SECRET!)
        //@ts-ignore
        req.user = payload
        if ((!payload as any).isAdmin) {
            return res.status(401).json({ Error: "You are not admin" })
        }
        next()
    } catch (error) {
        res.status(401).json((error as jwt.JsonWebTokenError).message)
    }
}