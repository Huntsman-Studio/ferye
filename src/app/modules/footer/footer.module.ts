import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SocialComponent } from './social/social.component';



@NgModule({
  declarations: [
    FooterComponent,
    NewsletterComponent,
    SocialComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    FooterComponent,
    NewsletterComponent,
    SocialComponent
  ]
})
export class FooterModule { }
