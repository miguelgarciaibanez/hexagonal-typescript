import { EmailSender } from "../app/domain/email-sender";

export class FakeEmailSender implements EmailSender {
  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    console.log(`simulating Sending email to ${to}: ${subject} - ${body}`);
  }
}
