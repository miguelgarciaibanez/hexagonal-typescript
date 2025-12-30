import { EmailSender } from "../domain/email-sender";
import { UserRepository } from "../domain/user-repository";

export class WelcomeEmailSender {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly emailSender: EmailSender,
  ) {}

  async run(userId: string): Promise<void> {
    console.log(`Welcome email sent to user with ID: ${userId}`);
    const user = await this.userRepository.getById(userId);
    if (!user) {
      throw new Error(`User not found ${userId}`);
    }
    console.log(`Welcome email sent to user with email: ${user.email}`);

    await this.emailSender.sendEmail(
      user.email,
      "Welcome to our service!",
      "Thank you for signing up to our service. We're glad to have you on board!",
    );
  }
}
