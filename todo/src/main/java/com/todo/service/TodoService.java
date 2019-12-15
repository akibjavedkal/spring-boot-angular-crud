package com.todo.service;

import java.util.List;
import java.util.Optional;

import com.todo.response.ResponseObj;
import com.todo.to.Todo;

public interface TodoService {

	List<Todo> getAllTodos();

	Optional<Todo> findTodoById(String id);

	ResponseObj saveTodo(Todo todo);
}
