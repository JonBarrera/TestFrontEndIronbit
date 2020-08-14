import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/operators/map";
import { Task } from '../Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  domain: string ='test-front-end-ironbit.vercel.app/';

  constructor(private http: HttpClient) { }

  //to Get task
  getTasks(){
  return this.http.get<Task[]>(`${this.domain}/api/tasks`)
    .pipe(map(res => res));

  }
  //to Add task
  addTask(newTask: Task){
  return this.http.post<Task>(`${this.domain}/api/tasks`, newTask)
    .pipe(map(res => res));
  }
  //to Delete task
  deleteTask(id) {
    return this.http.delete<Task>(`${this.domain}/api/tasks/${id}`)
      .pipe(map(res => res));
  }
}
