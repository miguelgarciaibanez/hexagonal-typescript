import { User } from "../app/domain/user";
import { UserRepository } from "../app/domain/user-repository";

const users: User[] = [
  new User("1", "john.doe@example.com"),
  new User("2", "miguel@gmail.com"),
];

export class InMemoryUserRepository implements UserRepository {
  async getById(userId: string): Promise<User | null> {
    const user = users.find(user => user.id === userId);
    if (!user) {
      return null;
    }
    return new User(user.id, user.email);
  }
}
