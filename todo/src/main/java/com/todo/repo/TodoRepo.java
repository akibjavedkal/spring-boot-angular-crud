package com.todo.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.todo.to.Todo;

@Repository
public interface TodoRepo extends CrudRepository<Todo, Long> {

}
