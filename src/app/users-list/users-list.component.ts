import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { user_data} from '../model/usertask';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any;
  usersData: user_data;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(response => this.users = response);
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.usersData = this.users.data;
      console.log(this.usersData);
    }
    );
  }

  delete_user(id) {
    this.userService.delete_user(id)
      .subscribe(res => {
        this.getUsers();
      }
      );
  }

}
