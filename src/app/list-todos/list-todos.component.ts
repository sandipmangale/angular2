import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common/src/pipes';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';
export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [];
  message :string
  // todos = [new Todo(1, 'Learn angular', false, new Date()),
  // new Todo(2, 'Learn JAVA', false, new Date()),
  // new Todo(3, 'Learn SpringBoot', false, new Date()),
  // ]
  constructor(private todoDataService: TodoDataService,private router : Router) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('sandip').subscribe(
      response => {
        console.log(response);
        this.todos=response;
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`);
    this.todoDataService.deleteTodos('sandip',id).subscribe(
      response=>{
        console.log(response);
        this.message=`Delete of todo ${id} successful`
        this.refreshTodos();
      }
    )
  }

  updateTodo(id){
    console.log(`update todo ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
