import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { GroupService } from './group.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GroupComponent],
  providers: [GroupService]
})
export class GroupModule { }
