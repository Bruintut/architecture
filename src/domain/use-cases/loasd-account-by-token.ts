export interface LoadAccountByToken{
    load: (acessToken: string, role?: string) => Promise<LoadAccountByToken.Result>
}

export namespace LoadAccountByToken{
    export type Result = {
        id:string
    }
}