import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _meta: Meta, private _title: Title) {

    // meta tags
    _meta.addTags([
      // Essential META Tags
      { property: 'og:title', content: 'Login Ferye' },
      { property: 'og:type', content: 'webiste' },
      { property: 'og:image', content: '' },
      { property: 'og:url', content: 'https://ferye.com/account/login' },
      // Non-Essential, But Recomended
      { property: 'og:description', content: 'Login to ferye account and manage your orders and your personal data.' }
    ]);

    // title
    _title.setTitle("Σύνδεση | Ferye all about jewellery")

  }

  ngOnInit(): void {
    
  }
}
