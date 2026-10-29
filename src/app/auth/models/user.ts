export interface User {
    id: string;
    username: string;
    password: string;
    token: string;
}

export interface UserLogin{
    username: string;
    password: string;
}