import { TodosService } from './todos.service';
import { Todo } from './todo.model';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    findAllTodos(): Todo[];
    findOneTodo(id: string): Todo;
    createTodo(title: string): Todo;
    updateTodo(id: string, title: string, done: boolean): Todo;
    deleteTodo(id: string): void;
}
