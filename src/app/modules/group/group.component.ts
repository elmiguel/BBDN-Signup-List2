import { Component, OnInit } from '@angular/core';
import { GroupService } from './group.service';
import { ApplicationState } from '../../app-reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bb-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor(
    private groupService: GroupService,
    private store: Store<ApplicationState>) { }

  ngOnInit() {
  }

}
