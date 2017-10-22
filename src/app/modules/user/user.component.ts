import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { ApplicationState } from '../../app-reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bb-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
  }

}
