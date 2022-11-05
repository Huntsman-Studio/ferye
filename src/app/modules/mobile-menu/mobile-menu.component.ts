import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/core/services/global-data.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  public menu: boolean | undefined;

  constructor(private globalDataService: GlobalDataService) { }

  ngOnInit(): void {
    //menu
    this.globalDataService.menu.subscribe( val => (
      this.menu = val
    ));
  }

  // closeMenu
  closeMenu() {
    this.globalDataService.showHideMenu(false);
  }
}
