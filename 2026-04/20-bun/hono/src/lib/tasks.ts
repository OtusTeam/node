export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export class InMemoryTaskRepository {
  private storage = new Map<string, Task>();

  list(filters?: { completed?: boolean; search?: string }): Task[] {
    let list = [...this.storage.values()];
    if (filters?.completed !== undefined) {
      list = list.filter((t) => t.completed === filters.completed);
    }
    if (filters?.search) {
      const needle = filters.search.toLowerCase();
      list = list.filter((t) => t.title.toLowerCase().includes(needle));
    }
    list.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    return list;
  }

  get(id: string): Task | undefined {
    return this.storage.get(id);
  }

  create(input: { title: string }): Task {
    const id = crypto.randomUUID();
    const ts = new Date().toISOString();
    const task: Task = {
      id,
      title: input.title,
      completed: false,
      createdAt: ts,
      updatedAt: ts,
    };
    this.storage.set(id, task);
    return task;
  }

  update(id: string, patch: { title?: string; completed?: boolean }): Task | undefined {
    const existing = this.storage.get(id);
    if (!existing) return undefined;
    const updated: Task = {
      ...existing,
      ...(patch.title !== undefined ? { title: patch.title } : {}),
      ...(patch.completed !== undefined ? { completed: patch.completed } : {}),
      updatedAt: new Date().toISOString(),
    };
    this.storage.set(id, updated);
    return updated;
  }

  delete(id: string): boolean {
    return this.storage.delete(id);
  }
}

export const tasksRepo = new InMemoryTaskRepository();

