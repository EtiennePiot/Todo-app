"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let TodosService = class TodosService {
    constructor() {
        this._todos = [];
    }
    findAllTodos() {
        return this._todos;
    }
    findOneTodo(id) {
        const todo = this._todos.find(todo => todo.id === id);
        if (!todo) {
            throw new Error(`Todo with id ${id} not found`);
        }
        return todo;
    }
    createTodo(title) {
        const todo = { id: (0, uuid_1.v4)(), title, done: false };
        this._todos.push(todo);
        return todo;
    }
    updateTodo(id, title, done) {
        const todo = this.findOneTodo(id);
        todo.title = title;
        todo.done = done;
        return todo;
    }
    deleteTodo(id) {
        const todo = this._todos.findIndex(todo => todo.id === id);
        if (todo === -1) {
            throw new Error(`Todo with id ${id} not found`);
        }
        this._todos.splice(todo, 1);
        return;
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
//# sourceMappingURL=todos.service.js.map