import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ContactComponent } from './contact/contact.component';
import { OurWorldComponent } from './our-world/our-world.component';
import { ProductsProtectionComponent } from './products-protection/products-protection.component';



@NgModule({
  declarations: [
    MainComponent,
    ContactComponent,
    OurWorldComponent,
    ProductsProtectionComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
