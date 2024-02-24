export type User = {
    id: number
    email: string
    password: string
    name: string | undefined | null
    birthdate: Date | undefined | null
    gender: string | undefined | null
}
