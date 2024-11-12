import jwt from "jsonwebtoken";
import LoginDTO, { Register as RegisterDTO } from "../Models/DTO/UserDTO";
import userDB from '../Models/Schema/UserModel'
import bcrypt from 'bcrypt'

const checkUser = (user: LoginDTO) => {
    try {
        const { username, password } = user
        return true
    } catch (error) {
        throw new Error('UserName or Password is missing')
    }

}

export const loginUser = async (user: LoginDTO) => {
    try {
        const userFromDB = await userDB.findOne({ username: user.username }).lean()
        if (!userFromDB) throw new Error('User not found')
        const isMatch = await bcrypt.compare(user.password, userFromDB.password)
        if (!isMatch) throw new Error('Password is incorrect')
        const token = await jwt.sign({
            user_id: userFromDB._id,
            isAdmin: userFromDB.isAdmin,
            username: userFromDB.username
        }, process.env.JWT_SECRET!,{
            expiresIn: '10m'
        })


        return {...userFromDB, token, password: '*******'}
    } catch (error) {
        throw new Error(error as string)
    }
}

export const createUser = async (user: RegisterDTO) => {
    try {
        checkUser(user)
        const encPass = await bcrypt.hash(user.password, 10)
        
        
        user.password = encPass
        const newUser = new userDB(user)
        await newUser.save()
        return newUser
    } catch (error) {
        console.log(error);
       throw new Error(error as string) 
    }
}

