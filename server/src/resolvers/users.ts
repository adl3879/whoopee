import { Ctx, Query, UseMiddleware } from "type-graphql"
import { Connection, getConnection, Repository } from "typeorm"
import User from "../entities/User"
import { ApolloError } from "apollo-server-express"
import { Context } from "../utils/types"
import { isAuth } from "../middleware/isAuth"

export default class UserResolver {
    // typeorm connection
    private readonly connection: Connection = getConnection()

    // user repositoty
    private userRepo: Repository<User> = this.connection.getRepository(User)

    // get current user
    @Query(() => User, { nullable: true })
    @UseMiddleware(isAuth)
    public async user(@Ctx() { req }: Context): Promise<User | undefined> {
        try {
            return await this.userRepo.findOne({ id: req.user?.id })
        } catch (err) {
            throw new ApolloError(err.message, "INTERNAL_SERVER_ERROR")
        }
    }

    // logout
    @Query(() => Boolean)
    @UseMiddleware(isAuth)
    public logout(@Ctx() { req }: Context): Promise<boolean> {
        return new Promise((resolve) => {
            req.logOut()
            resolve(true)
        })
    }
}
