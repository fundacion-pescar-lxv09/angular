export interface User {
    id: string,
    username: string,
    email: string,
    password: string,
    data?: {
        street: string,
        number: number,
        zipcode: string,
        geo?: {
            lat: string,
            lng: string
        }
    }
}