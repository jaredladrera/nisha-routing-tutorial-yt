import { Component, OnInit } from '@angular/core';
import { UserApiService } from './../service/user-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userData: any;

  constructor(private userService: UserApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      this.getUser();
      // let id = this.route.snapshot.params['id'];
  }

  getUser = () => {
    this.userService.getUsers().subscribe( user => {
      this.userData = user;
    });
  }

}
