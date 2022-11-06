import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangerComponent } from './danger/danger.component';
import { CheckComponent } from './check/check.component';
import { CartComponent } from './cart/cart.component';
import { FavouritesIconComponent } from './favourites-icon/favourites-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { FeryeLogoDarkComponent } from './ferye-logo-dark/ferye-logo-dark.component';



@NgModule({
  declarations: [
    DangerComponent,
    CheckComponent,
    CartComponent,
    FavouritesIconComponent,
    MenuIconComponent,
    SearchIconComponent,
    FeryeLogoDarkComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DangerComponent,
    CheckComponent,
    CartComponent,
    FavouritesIconComponent,
    MenuIconComponent,
    SearchIconComponent,
    FeryeLogoDarkComponent
  ]
})
export class IconsModule { }
