import { Component, OnInit, OnDestroy } from '@angular/core';
import { DotnetRestapiServiceService } from 'src/app/services/dotnet-restapi-service.service';
import { interval, Subscription, throwError } from 'rxjs';
import { switchMap, catchError, delayWhen } from 'rxjs/operators';

interface User {
  id?: number | null;
  username: string;
  email: string;
}

@Component({
  selector: 'app-dotnet-restapi',
  templateUrl: './dotnet-restapi.component.html',
  styleUrls: ['./dotnet-restapi.component.css']
})
export class DotnetRestapiComponent implements OnInit, OnDestroy {

  formHeader: string = "Add User";
  showForm: boolean = false;

  username: string = "";
  email: string = "";
  id: number | null = null;

  users: User[] = [];

  private refreshSubscription: Subscription | undefined;

  constructor(private userService: DotnetRestapiServiceService) {}

  ngOnInit(): void {
    this.getUsers();
    this.setupDataRefresh();
  }

  private setupDataRefresh() {
    const refreshIntervalMs = 60000;
    let disconnected = false;

    this.refreshSubscription = interval(refreshIntervalMs)
      .pipe(
        switchMap(() => {
          if (disconnected) {
            return throwError(() => "Disconnected from server!");
          }
          return this.userService.fetchUsers().pipe(
            catchError(() => {
              disconnected = true;
              return throwError(() => "Disconnected from server!");
            })
          );
        }),
        delayWhen(() => disconnected ? interval(refreshIntervalMs) : interval(0))
      )
      .subscribe(
        (data: User[]) => {
          this.users = data;
          disconnected = false;
        },
        (error) => console.log("Auto-refresh error:", error)
      );
  }

  ngOnDestroy(): void {
    this.refreshSubscription?.unsubscribe();
  }

  getUsers() {
    this.userService.fetchUsers().subscribe(
      data => this.users = data,
      error => console.log("Error fetching users:", error)
    );
  }

  deleteUser(id: number | null) {
    if (id !== null) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.userService.deleteUser(id).subscribe(
          () => {
            alert("User deleted successfully!");
            this.getUsers();
          },
          error => console.log("Error deleting user:", error)
        );
      }
    }
  }

  openForm(data: User | null = null) {
    this.clearForm();
    this.showForm = true;

    if (data) {
      this.username = data.username;
      this.email = data.email;
      this.id = data.id || null;
      this.formHeader = "Edit User";
    } else {
      this.formHeader = "Add User";
      this.id = null;
    }
  }

  closeForm() {
    this.showForm = false;
    this.clearForm();
  }

  clearForm() {
    this.username = "";
    this.email = "";
    this.id = null;
  }

  saveUser() {
    const body: User = {
      username: this.username,
      email: this.email
    };

    if (this.id !== null) {
      body.id = this.id;

      if (confirm("Are you sure you want to update this user?")) {
        this.userService.updateUser(this.id, body).subscribe(
          () => {
            alert("User updated successfully!");
            this.getUsers();
          },
          error => console.log("Error updating user:", error)
        );
      }
    } else {
      this.userService.createUser(body).subscribe(
        () => {
          alert("User added successfully!");
          this.getUsers();
        },
        error => console.log("Error adding user:", error)
      );
    }

    this.showForm = false;
  }

  hasData(): boolean {
    return this.users && this.users.length > 0;
  }

  hasError(): boolean {
    return !this.users || this.users.length === 0;
  }

}
