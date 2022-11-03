import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { MobileMenuModule } from './mobile-menu/mobile-menu.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    MobileMenuModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    MobileMenuModule
  ]
})
export class ModulesModule { }
