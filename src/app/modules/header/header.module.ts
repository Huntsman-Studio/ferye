import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IconsModule } from 'src/app/shared/icons/icons.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
