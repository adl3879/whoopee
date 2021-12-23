import { Request, Response } from "express"

export type Context = {
    req: Request & { session: any } & { headers: { Authorization: any } }
    res: Response
}
