import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from 'src/app/core/services/global-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public element = document.getElementById('');

  constructor(public router: Router, private globalDataService: GlobalDataService) { }

  ngOnInit(): void {
  }

  // showMenu
  showMenu() {
    this.globalDataService.showHideMenu(true);
  }

  // set bg Color 
  setElementClass(): string {
    if (this.router.url.includes('login')) {
      return 'FAFAFA';
    }
    else if (this.router.url.includes('contact')) {
      return '#E0EBF6';
    }
    else {
      return '#E0F6F3';
    }
  }
}
