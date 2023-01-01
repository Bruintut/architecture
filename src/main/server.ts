import  env  from "./adapters/config/env"
import { MongoHelper } from "../infra/helpers/mongo-helpers";

MongoHelper.connect(env.mongoUrl).then(async()=> {
    const {setupApp} = await import('./adapters/config/app')
    const app = await setupApp()
    app.listen(env.port, ()=> console.log(`Server running at http://localhost:${env.port}`))
})