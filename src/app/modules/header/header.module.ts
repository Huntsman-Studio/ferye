import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { IconsModule } from 'src/app/shared/icons/icons.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    IconsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
