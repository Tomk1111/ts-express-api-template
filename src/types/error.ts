export interface IError {
    success: boolean,
    name: string,
    status: number,
    message: string,
    stack?: string
}