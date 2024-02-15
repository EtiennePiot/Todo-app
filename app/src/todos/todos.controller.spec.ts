import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';

describe('TodosController', () => {
  let controller: TodosController;
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService],
    }).compile();

    controller = module.get<TodosController>(TodosController);
    service = module.get<TodosService>(TodosService);
  });

  describe('findAllTodos', () => {
    it('should return an array of todos', async () => {
      const result: Todo[] = [{ id: 'a', title: 'Test Todo', done: false }];
      jest.spyOn(service, 'findAllTodos').mockImplementation(() => result);
  
      expect(await controller.findAllTodos()).toBe(result);
    });
  });
  
  describe('findOneTodo', () => {
    it('should return a single todo item', async () => {
      const result: Todo = { id: 'a', title: 'Test Todo', done: false };
      jest.spyOn(service, 'findOneTodo').mockImplementation(() => result);
  
      expect(await controller.findOneTodo('a')).toBe(result);
    });
  });
  
  describe('createTodo', () => {
    it('should create a new todo item', async () => {
      const result: Todo = { id: 'a', title: 'Test Todo', done: false };
      jest.spyOn(service, 'createTodo').mockImplementation(() => result);
  
      expect(await controller.createTodo('Test Todo')).toBe(result);
    });
  });
  
  describe('updateTodo', () => {
    it('should update a todo item', async () => {
      const result: Todo = { id: 'a', title: 'Updated Test Todo', done: true };
      jest.spyOn(service, 'updateTodo').mockImplementation(() => result);
  
      expect(await controller.updateTodo('a', 'Updated Test Todo', true)).toBe(result);
    });
  });
  
  describe('deleteTodo', () => {
    it('should delete a todo item', async () => {
      const spy = jest.spyOn(service, 'deleteTodo').mockImplementation(() => {});
      await controller.deleteTodo('a');
      expect(spy).toHaveBeenCalledWith('a');
    });
  });
});
