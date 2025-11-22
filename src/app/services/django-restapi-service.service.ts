import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DjangoRestapiServiceService {

  constructor(private http: HttpClient) {}

  // Django endpoint (tasks)
  private url = "http://localhost:8000/api/tasks/";

  /**
   * Fetch all tasks
   */
  fetchTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Create a new task
   */
  postTask(body: any): Observable<any> {
    return this.http.post<any>(this.url, body).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Delete a task by ID
   */
  deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}${id}/`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Update a task by ID
   */
  putTask(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.url}${id}/`, body).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Centralized error handler for Django API
   */
  private handleError(error: HttpErrorResponse) {
    console.error("Django API Error:", error);

    if (error.error instanceof ErrorEvent) {
      return throwError(() => new Error(`Client error: ${error.error.message}`));
    } else {
      let message = "Server error occurred";

      switch (error.status) {
        case 400:
          message = "Invalid data (400)";
          break;
        case 404:
          message = "Task not found (404)";
          break;
        case 500:
          message = "Server crashed (500)";
          break;
      }

      return throwError(() => new Error(message));
    }
  }
}
