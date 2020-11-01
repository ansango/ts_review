import { Todo } from "../models/todo.model";
/**
 * @class Service
 *
 * Manages the data of the application.
 */
export class TodoService {
  todos: Todo;
  constructor() {
    this.todos = (JSON.parse(localStorage.getItem("todos")) || []).map(
      (todo) => new Todo(todo)
    );
  }

  
}
