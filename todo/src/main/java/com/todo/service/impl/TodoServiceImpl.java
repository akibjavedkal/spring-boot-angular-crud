package com.todo.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.todo.repo.TodoRepo;
import com.todo.response.ResponseObj;
import com.todo.service.TodoService;
import com.todo.to.Todo;

@Service
@Transactional
public class TodoServiceImpl implements TodoService {

	@Autowired
	private TodoRepo todoRepo;
	
	@Autowired
	private ResponseObj res;

	@Override
	public List<Todo> getAllTodos() {
		List<Todo> todoList = (List<Todo>) todoRepo.findAll();
		return todoList;
	}

	@Override
	public Optional<Todo> findTodoById(String id) {
		Optional<Todo> todo = todoRepo.findById(Long.parseLong(id));
		return todo;
	}

	@Override
	public ResponseObj saveTodo(Todo todo) {
		todoRepo.save(todo);
		res.setMsgType("Successful");
		return res;
	}
	
	

}
