import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangerComponent } from './danger/danger.component';
import { CheckComponent } from './check/check.component';



@NgModule({
  declarations: [
    DangerComponent,
    CheckComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DangerComponent,
    CheckComponent
  ]
})
export class IconsModule { }
