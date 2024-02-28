export interface User {
    name: string;
    age: number;
}

export interface UserFromDatabase {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

export interface UserFromDatabaseComplete extends UserFromDatabase {
    address: string;
    company: string;
}
