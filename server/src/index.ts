import express, { Request, Response } from "express"
import { ApolloServer } from "apollo-server-express"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import cors from "cors"
import { createConnection } from "typeorm"
import path from "path"
import resolvers from "./resolvers"
import entities from "./entities"
import * as dotenv from "dotenv"
import Redis from "ioredis"
import connectRedis from "connect-redis"
import session from "express-session"
import { COOKIE_NAME, __prod__ } from "./constants"
import passport from "passport"
import { router as UserRouter } from "./routes/users"
import cookieParser from "cookie-parser"
import { buildContext } from "graphql-passport"

dotenv.config()
const PORT = 4000

async function main() {
    // create postgres configuration
    const connection = await createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        logging: true,
        synchronize: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities,
    })
    connection.runMigrations()

    const app = express()

    // redis
    const RedisStore = connectRedis(session)
    const redis = new Redis(process.env.REDIS_URL)

    app.set("trust proxy", 1)
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(
        cors({
            credentials: true,
            origin: "*",
        }),
    )

    app.use(cookieParser(process.env.SESSION_SECRET))
    app.use(
        session({
            name: COOKIE_NAME,
            store: new RedisStore({
                client: redis,
                disableTouch: true,
            }),
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years
                httpOnly: true,
                sameSite: false, // csrf
                secure: __prod__, // cookie only works in https
                domain: __prod__ ? ".codeponder.com" : undefined,
            },
            saveUninitialized: false,
            secret: process.env.SESSION_SECRET,
            resave: false,
        }),
    )
    require("./auth/passport")

    app.use(passport.initialize())
    app.use(passport.session())

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers,
            validate: false,
        }),
        context: ({ req, res }: { req: Request; res: Response }) => buildContext({ req, res }),
    })

    // app.use("/graphql", (req, res, next) => {
    //     passport.authenticate("google", { scope: ["profile", "email"] }, (_err, user, _info) => {
    //         if (user) {
    //             req.user = user
    //             console.log(user)
    //         }
    //         next()
    //     })(req, res, next)
    // })
    await server.start()
    server.applyMiddleware({ app, cors: false })

    // setup user routes
    app.use("/auth", UserRouter)

    app.listen({ port: PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
    })
}

main().catch((err) => {
    console.log(err)
})
