import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  describe('createTodo', () => {
    it('should create a new todo item', () => {
      const title = 'Test Todo';
      const todo = service.createTodo(title);
      expect(todo.title).toEqual(title);
      expect(todo.done).toEqual(false);
      expect(typeof todo.id).toBe('string');
    });
  });
  
  describe('findOneTodo', () => {
    it('should return a single todo item', () => {
      const todo = service.createTodo('Test Todo');
      expect(service.findOneTodo(todo.id)).toEqual(todo);
    });
  
    it('should throw an error if todo is not found', () => {
      expect(() => service.findOneTodo('non-existing-id')).toThrow(Error);
    });
  });
  
  describe('updateTodo', () => {
    it('should update a todo item', () => {
      const todo = service.createTodo('Test Todo');
      const updatedTodo = service.updateTodo(todo.id, 'Updated Test Todo', true);
      expect(updatedTodo.title).toEqual('Updated Test Todo');
      expect(updatedTodo.done).toBe(true);
    });
  
    it('should throw an error if todo to update is not found', () => {
      expect(() => service.updateTodo('non-existing-id', 'Test', true)).toThrow(Error);
    });
  });
  
  describe('deleteTodo', () => {
    it('should delete a todo item', () => {
      const todo = service.createTodo('Test Todo');
      expect(service.findAllTodos()).toContain(todo);
      service.deleteTodo(todo.id);
      expect(service.findAllTodos()).not.toContain(todo);
    });
  
    it('should throw an error if todo to delete is not found', () => {
      expect(() => service.deleteTodo('non-existing-id')).toThrow(Error);
    });
  });
  

});
