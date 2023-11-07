export interface UserAttributes {
    id: number;
    name: string;
    last_name: string;
    email: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
}