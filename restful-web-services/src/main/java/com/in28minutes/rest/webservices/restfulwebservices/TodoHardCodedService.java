package com.in28minutes.rest.webservices.restfulwebservices;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {
	private static List<Todo> todos= new ArrayList<Todo>();
	
	private static int idCounter=0;
	static {
		todos.add(new Todo(++idCounter,"in28Minutes","Learn Angular",new Date(),false));
		todos.add(new Todo(++idCounter,"in28Minutes","Learn Spring Boot",new Date(),false));
		todos.add(new Todo(++idCounter,"in28Minutes","Learn AWS",new Date(),false));
	}
	
	public List<Todo> findAll(){		
		return todos;
	}
	
	public Todo deleteById(long id) {
		Todo todo=findById(id);
		System.out.println("To found"+todo.getDescription());
		if(todos.remove(todo)) {
			System.out.println("removed  "+todo.getId());
			return todo;
		}
		
		return null;
	}
	
	public Todo save(Todo todo) {
		if(todo.getId()==-1) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	public Todo findById(long id) {
		return todos.stream()
				  .filter(todo -> id==todo.getId())
				  .findAny()
				  .orElse(null);
	}
}
