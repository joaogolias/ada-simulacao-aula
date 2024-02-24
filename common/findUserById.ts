import { User } from "./model/User";
import { users } from "./users";

export const findUserById = (userId: number): User | undefined | null => {
    return users.find(({ id }) => id === userId )
}