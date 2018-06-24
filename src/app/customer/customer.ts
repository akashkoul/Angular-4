/* Defines the customer entity */
export interface ICustomer {
    id: number;
    avatar : string;
    name : string;
    contact: string;
    city: string;
    wallet: number;
    occupation: string;
    isActive: boolean;
}
