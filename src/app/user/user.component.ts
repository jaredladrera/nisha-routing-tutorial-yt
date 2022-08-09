import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApiService } from './../service/user-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  inUserData: any;
  constructor(private router: ActivatedRoute, private userService: UserApiService) { }

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];
    this.userService.getUserById(id).subscribe({
      next: (res) => {
        this.inUserData = res;
      },
      error: () => {
        console.log('Error while getting the data');
      }
    })
  }

}
