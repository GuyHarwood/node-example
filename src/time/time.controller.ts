import { TimeService } from "./time.service";
import { Request, Response } from 'express';
import { HttpStatusCodes } from "../shared/HttpStatusCodes";

export class TimeController {
    static getCurrentTime(req: Request, res: Response) {
        try {
            res.status(HttpStatusCodes.OK).send(TimeService.now(req.query.offset || '0'));
        } catch (e) {
            res.status(HttpStatusCodes.BadRequest).send(e);
        }
    }
}