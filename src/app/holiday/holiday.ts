/* Defines the product entity */

export interface IHoliday {
    id: number;
    avatar : string;
    categoryId: number;
    holidayName: string;
    unitPrice: number;
    unitInStock: number;
}

export interface ICategory {
    id: number;
    categoryName: string;
}
