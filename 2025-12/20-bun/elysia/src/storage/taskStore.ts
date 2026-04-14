import type { Task } from "../domain/task";

export class TaskStore {
  #tasks = new Map<string, Task>();

  list() {
    return [...this.#tasks.values()];
  }

  get(id: string) {
    return this.#tasks.get(id);
  }

  has(id: string) {
    return this.#tasks.has(id);
  }

  set(task: Task) {
    this.#tasks.set(task.id, task);
  }

  delete(id: string) {
    this.#tasks.delete(id);
  }

  count() {
    return this.#tasks.size;
  }
}

