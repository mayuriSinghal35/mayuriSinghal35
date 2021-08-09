import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { user_data} from '../model/usertask';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  response: any;
  user_data: user_data;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserServiceService) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
  }

  getUser(id) {
    this.userService.getUser(id).subscribe(response => {
      this.response = response;
      this.user_data = this.response.data;
      console.log(this.user_data);
    });
  }

}
