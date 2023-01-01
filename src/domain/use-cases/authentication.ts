export interface Authentication{
    auth:(authebticationParams: Authentication.Params)=>Promise<Authentication.Result>
}
    export namespace Authentication{
        export type Params = {
            email: string
            password: string
        }

        export type Result = {
            acessToken: string
            name: string
        }
    }
