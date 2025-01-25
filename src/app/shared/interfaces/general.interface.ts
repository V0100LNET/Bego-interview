export interface ResponseAPI<T> {
    status: number;
    result?: T;
}