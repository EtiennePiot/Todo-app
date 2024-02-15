import { Todo } from './todo.model';
export declare class TodosService {
    private _todos;
    findAllTodos(): Todo[];
    findOneTodo(id: string): Todo;
    createTodo(title: string): Todo;
    updateTodo(id: string, title: string, done: boolean): Todo;
    deleteTodo(id: string): void;
}
