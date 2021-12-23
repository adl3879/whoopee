declare namespace NodeJS {
    export interface ProcessEnv {
        DATABASE_URL: string
        REDIS_URL: string
        SESSION_SECRET: string | string[]
        GOOGLE_CLIENT_ID: string
        GOOGLE_CLIENT_SECRET: string
        FACEBOOK_CLIENT_ID: string
        FACEBOOK_CLIENT_SECRET: string
        GITHUB_CLIENT_ID: string
        GITHUB_CLIENT_SECRET: string
    }
}
