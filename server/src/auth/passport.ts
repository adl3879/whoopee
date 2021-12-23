import passport, { Profile } from "passport"
import { OAuth2Strategy, VerifyFunction } from "passport-google-oauth"
import { Strategy as FacebookStrategy } from "passport-facebook"
import { Strategy as GithubStrategy } from "passport-github2"
import { getConnection } from "typeorm"
import User from "../entities/User"

require("dotenv").config()

const connection = getConnection()
const userRepository = connection.getRepository(User)

// google
passport.use(
    new OAuth2Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback",
        },
        authCallback(),
    ),
)

// facebook
passport.use(
    new FacebookStrategy(
        {
            clientID: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/facebook/callback",
        },
        authCallback(),
    ),
)

// github
passport.use(
    new GithubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/github/callback",
        },
        authCallback(),
    ),
)

function authCallback() {
    return async function (_accessToken: string, _refreshToken: string, profile: Profile, done: VerifyFunction) {
        let user: User | undefined

        try {
            user = await new User().findOneBySocialId(profile.id)

            if (user) return done(null, user)

            user = await new User().save(profile)
        } catch (err) {
            throw new Error(err.message)
        }
        return done(null, user)
    }
}

passport.serializeUser(function (user: Express.User, done) {
    done(null, user.id)
})

passport.deserializeUser(async function (id: number, done) {
    const user = await userRepository.findOne({ id })
    done(null, user)
})
