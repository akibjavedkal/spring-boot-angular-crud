package com.todo.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.todo.response.ResponseObj;
import com.todo.service.TodoService;
import com.todo.to.Todo;


@RestController
@CrossOrigin(origins = "*" , allowedHeaders = "*")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	@Autowired
	private ResponseObj res;
	
	@PostMapping("getTodo")
	public List<Todo> getAllTodos() {
		return todoService.getAllTodos();
	}
	
	@PostMapping("findTodoById")
	public Optional<Todo> findTodoById(@RequestParam("id")String id) {
		return todoService.findTodoById(id);
	}
	
	@PostMapping("saveTodo")
	public ResponseObj saveTodo (@RequestBody Todo todo) {
		return todoService.saveTodo(todo);
	}
	
	//TO check in browser
	@GetMapping("getTodos")
	public List<Todo> getAllTodo() {
		return todoService.getAllTodos();
	}
	
			
}
