import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DotnetRestapiServiceService {

  constructor(private http: HttpClient) {}

  // Base API URL for the .NET REST API (Users Endpoint)
  private url = "http://localhost:5001/users";

  /**
   * Fetch all users.
   * Connects to the .NET UsersController -> GET /users.
   * Returns an empty array if no users exist.
   */
  fetchUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Fetch a single user by ID.
   * @param id - User ID
   * Calls GET /users/{id} in .NET API.
   */
  fetchUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Add a new user.
   * @param body - Contains username & email.
   * Calls POST /users to .NET API.
   * Uses backend validation to avoid duplicates.
   */
  createUser(body: any): Observable<any> {
    return this.http.post<any>(this.url, body).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Update an existing user by ID.
   * @param id - User ID
   * @param body - Updated username & email
   * Calls PUT /users/{id}.
   */
  updateUser(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, body).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Delete a user by ID.
   * @param id - User ID
   * Calls DELETE /users/{id}.
   */
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Centralized error handler for all .NET API requests.
   * Maps .NET HTTP error codes to user-friendly messages.
   */
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';

    if (error.error instanceof ErrorEvent) {
      // Client-side error (browser or network)
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Backend (.NET API) error
      switch (error.status) {
        case 404:
          errorMessage = 'User not found!';
          break;
        case 400:
          errorMessage = error.error.message || 'Invalid request data!';
          break;
        case 409:
          errorMessage = 'Duplicate user detected!';
          break;
        case 500:
          errorMessage = 'Server error from .NET API!';
          break;
        default:
          errorMessage = `Unexpected server error: ${error.message}`;
          break;
      }
    }

    return throwError(() => new Error(errorMessage));
  }
}
