import { randomUUID } from "crypto";
import { User, NewUser, UpdateUser } from "../types";

class InMemoryUserRepository {
  private store = new Map<string, User>();

  async create(input: NewUser): Promise<User> {
    const now = new Date().toISOString();
    const user: User = { id: randomUUID(), createdAt: now, updatedAt: now, ...input };
    this.store.set(user.id, user);
    return user;
  }

  async findAll(): Promise<User[]> {
    return [...this.store.values()];
  }

  async findById(id: string): Promise<User | null> {
    return this.store.get(id) ?? null;
  }

  async findByEmail(email: string): Promise<User | null> {
    for (const u of this.store.values()) if (u.email === email) return u;
    return null;
  }

  async update(id: string, patch: UpdateUser): Promise<User> {
    const current = this.store.get(id);
    if (!current) throw new Error("not found");
    const updated: User = { ...current, ...patch, updatedAt: new Date().toISOString() };
    this.store.set(id, updated);
    return updated;
  }

  async delete(id: string): Promise<boolean> {
    return this.store.delete(id);
  }
}

export const userRepository = new InMemoryUserRepository();