export class Task {
  constructor(name, isCompleted) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.isCompleted = isCompleted;
  }
}
