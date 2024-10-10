export interface IError extends Error {
    success?: boolean,
    status: number,
    message: string,
    stack?: string
}
