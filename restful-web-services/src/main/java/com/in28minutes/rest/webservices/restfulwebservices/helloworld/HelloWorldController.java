package com.in28minutes.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

	//@RequestMapping(method=RequestMethod.GET,path="/hello-world")
	@GetMapping(path="/hello-world")
	public String sayHelloWorld() {
		return "Hello world";
	}

	@GetMapping(path="/hello-world-bean")
	public HelloWorldBean HelloWorldBean() {
		//throw new RuntimeException("Custom error message ::Some error happened....***");
		return new HelloWorldBean("Hello world-bean-sandip");
	}
	
	@GetMapping(path="/hello-world/path-variable/{name}")
	public HelloWorldBean HelloWorldBean(@PathVariable String name) {
		return new HelloWorldBean("Hello world "+name);
	}
	
	
	
}
