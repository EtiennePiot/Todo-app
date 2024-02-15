import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TodosService {
    private _todos: Todo[] = [];

    findAllTodos() {
        return this._todos;
    }

    findOneTodo(id: string): Todo {
        const todo = this._todos.find(todo => todo.id === id);
        if (!todo) {
            throw new Error(`Todo with id ${id} not found`);
        }
        return todo;
    }

    createTodo(title:string): Todo {
        const todo: Todo = {id: uuid(), title, done: false}
        this._todos.push(todo);
        return todo;
    }

    updateTodo(id: string, title:string, done: boolean): Todo {
        const todo = this.findOneTodo(id);
        todo.title = title;
        todo.done = done;
        return todo;
    }

    deleteTodo(id: string): void {
        const todo = this._todos.findIndex(todo => todo.id === id);
        if (todo === -1) {
            throw new Error(`Todo with id ${id} not found`);
        }
        this._todos.splice(todo, 1);
        return;
    }
}
