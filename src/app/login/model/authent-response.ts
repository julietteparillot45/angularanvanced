import { User } from "./user";

export interface AuthentResponse {
    user : User; 
    token: string;
}
