import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { AngularFaviconService } from 'angular-favicon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ferye';

  constructor(private ngxFavicon: AngularFaviconService, 
              private _meta: Meta,
              @Inject(DOCUMENT) private _document: Document) {

    // Global Meta Tags
    _meta.addTags([
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: "og:locale", content: "el_GR" },
      { property: 'og:site_name', content: 'Ferye' }
    ]);
  }

  ngOnInit() {

    // Favicon
    this.ngxFavicon.setFavicon("assets/images/icons/ferye_favicon_dark.svg", "assets/images/icons/ferye_favicon_light.svg");

    // set HTML language
    this._document.documentElement.lang = 'el';
  }
}
