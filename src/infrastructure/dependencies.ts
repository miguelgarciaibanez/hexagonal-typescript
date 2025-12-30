import { WelcomeEmailSender } from "../app/application/welcome-email-sender";
import { ConsoleLogger } from "../contexts/shared/logger/console-logger";
import { UserController } from "../contexts/users/api/user-controller";
import { FakeEmailSender } from "./fake-email-sender";
import { InMemoryUserRepository } from "./in-memory-user-repository";

const inMemoryUserRepository = new InMemoryUserRepository();
const fakeEmailSender = new FakeEmailSender();
export const welcomeEmailSender = new WelcomeEmailSender(
  inMemoryUserRepository,
  fakeEmailSender,
);
const logger = new ConsoleLogger();
export const userController = new UserController({
  logger,
  welcomeEmailSender,
});
