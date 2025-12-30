import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { WelcomeEmailSender } from "@/src/app/application/welcome-email-sender";

import { Logger } from "@/shared/logger/logger";

export class UserController {
  private readonly logger;
  private readonly welcomeEmailSender: WelcomeEmailSender;

  constructor(dependencies: {
    logger: Logger;
    welcomeEmailSender: WelcomeEmailSender;
  }) {
    this.logger = dependencies.logger;
    this.welcomeEmailSender = dependencies.welcomeEmailSender;
  }

  async run(req: Request, res: Response) {
    const userId = req.params.id;
    await this.welcomeEmailSender.run(userId);
    this.logger.info("Received request to get users", { userId });
    res.status(StatusCodes.OK).send({ users: "ok" });
  }
}
