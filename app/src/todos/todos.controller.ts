import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    findAllTodos(): Todo[] {
        return this.todosService.findAllTodos();
    }

    @Get(':id')
    findOneTodo(@Param('id') id: string): Todo {
        return this.todosService.findOneTodo(id);
    }

    @Post()
    createTodo(@Body('title') title: string): Todo {
        return this.todosService.createTodo(title);
    }
    

    @Put(':id')
    updateTodo(@Param('id') id: string, @Body('title') title: string, @Body('done') done: boolean): Todo {
        return this.todosService.updateTodo(id, title, done);
    }

    @Delete(':id')
    deleteTodo(@Param('id') id: string): void {
        return this.todosService.deleteTodo(id);
    }
}
