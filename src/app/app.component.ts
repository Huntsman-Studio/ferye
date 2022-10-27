import { Component, OnInit } from '@angular/core';
import { AngularFaviconService } from 'angular-favicon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ferye';

  constructor(private ngxFavicon: AngularFaviconService) {}

  ngOnInit() {
    this.ngxFavicon.setFavicon("assets/images/icons/ferye_favicon_dark.svg", "assets/images/icons/ferye_favicon_light.svg");
  }
}
