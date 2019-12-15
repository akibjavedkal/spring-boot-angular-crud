import { Component, OnInit } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { todo } from '../model/todo';



@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todoList ;
  todoName;
  modalRef: BsModalRef;
  isUpdateTodo = false;

  constructor(private todoService : TodoService, private modalService : BsModalService) {
    this.todoName = new todo();
  }

  ngOnInit() {
    this.getTodos();
  }
  

  getTodos(){
    this.todoService.post('getTodo','').subscribe(
      res => {
      this.todoList = res;
      }
    )
  }

  editTodo(editTodoModal,id){
    this.isUpdateTodo = true;
    this.modalRef = this.modalService.show(editTodoModal);
    let param = new FormData;
    param.append('id',id);
  
    if(id != null){
      this.isUpdateTodo = false;
      this.todoService.post('findTodoById',param).subscribe(
        res =>{
          this.todoName = res;
        }
      )
    }
  
  }


  updateTodo(){
    this.todoService.post('saveTodo',this.todoName).subscribe(
      res =>{
        if(res['msgType'] == 'Successful' ){
          this.modalRef.hide();
          this.ngOnInit();
        }
          
      }
    )
  }
 
}
