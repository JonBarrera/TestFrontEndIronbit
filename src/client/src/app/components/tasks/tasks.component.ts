import { Component, OnInit } from '@angular/core';
import { TaskService } from "../../services/task.service";

import { Task } from "../../Task";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[];
  title: string;

  constructor(private taskService: TaskService) { 
    this.taskService.getTasks()
    .subscribe(tasks => {
      console.log(tasks);
      this.tasks = tasks
    })
  }

  ngOnInit() {
  }

  //Interface to add dates
  addTask(event){
    event.preventDefault();
    const newTask:Task = {
      title: this.title,
    };
    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      })        
  }

  deleteTask(id) {
      const tasks = this.tasks;
      this.taskService.deleteTask(id)
        .subscribe((data: any) => {
          if(data.n == 1) {
            this.tasks = this.tasks.filter(t =>t._id !==id)
          }
        })
  }               
}
