import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from 'src/app/core/services/global-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router, private globalDataService: GlobalDataService) { }

  ngOnInit(): void {
  }

  // showMenu
  showMenu() {
    this.globalDataService.showHideMenu(true);
  }
}
