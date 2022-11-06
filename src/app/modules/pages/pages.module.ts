import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ContactComponent } from './contact/contact.component';
import { OurWorldComponent } from './our-world/our-world.component';
import { ProductsProtectionComponent } from './products-protection/products-protection.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsModule } from 'src/app/shared/icons/icons.module';



@NgModule({
  declarations: [
    MainComponent,
    ContactComponent,
    OurWorldComponent,
    ProductsProtectionComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule
  ]
})
export class PagesModule { }
