import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/operators/map";
import { Task } from '../Task';
import { NowRequest, NowResponse } from '@vercel/node'

export default (req: NowRequest, res: NowResponse) => {
  res.json({ name: 'Jonathan Barrera', email: 'jonathan_b_e1995@outlook.com' })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  //to Get task
  getTasks(){
  return this.http.get<Task[]>('/api/tasks')
    .pipe(map(res => res));

  }
  //to Add task
  addTask(newTask: Task){
  return this.http.post<Task>('/api/tasks', newTask)
    .pipe(map(res => res));
  }
  //to Delete task
  deleteTask(id) {
    return this.http.delete<Task>(`/api/tasks/${id}`)
      .pipe(map(res => res));
  }
}
