export default interface LoginDTO {
    username: string
    password: string
}


export interface Register extends LoginDTO {
    isAdmin: boolean
}
