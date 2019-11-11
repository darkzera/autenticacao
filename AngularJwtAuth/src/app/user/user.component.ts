import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userInfo: any;
  board: string;
  errorMessage: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data => {
        this.userInfo = {
          name: data.user.name,
          email: data.user.email
        };
        this.board = data.description;
      },
      error => {
        this.errorMessage = `${error.status}: ${error.error}`;
      }
    );
  }
}
