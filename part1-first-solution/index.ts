import { findUserById } from "../common/findUserById"

export const generateEmailTitle = (userId: number): string => {
    const user = findUserById(userId)
    
    if(user !== null && user !== undefined) {
        if(user.name !== null && user.name !== undefined && user.name !== "") {
            return "Hello, " + user.name
        } else {
            return "Hello, User"
        }
    } else {
        return "Hello, User"
    }
}
