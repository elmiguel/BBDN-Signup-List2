import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListService } from './list.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
  providers: [ListService]
})
export class ListModule { }
