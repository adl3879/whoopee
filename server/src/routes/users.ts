import { Router } from "express"
import passport from "passport"

export const router = Router()

// google
router.get("/google", (req, res) => {
    passport.authenticate("google", { scope: ["email", "profile"] })(req, res)
})

router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://localhost:3000",
        failureRedirect: "/",
    }),
)

// facebook
router.get("/facebook", (req, res) => {
    passport.authenticate("facebook", { scope: ["email", "profile"] })(req, res)
})

router.get(
    "/facebook/callback",
    passport.authenticate("facebook", {
        successRedirect: "http://localhost:3000",
        failureRedirect: "/",
    }),
)

// github
router.get("/github", (req, res) => {
    passport.authenticate("github", { scope: ["email", "profile"] })(req, res)
})

router.get(
    "/github/callback",
    passport.authenticate("github", {
        successRedirect: "http://localhost:3000",
        failureRedirect: "/",
    }),
)
