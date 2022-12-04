import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DangerComponent } from './danger/danger.component';
import { CartComponent } from './cart/cart.component';
import { FavouritesIconComponent } from './favourites-icon/favourites-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { FeryeLogoDarkComponent } from './ferye-logo-dark/ferye-logo-dark.component';
import { AccountIconComponent } from './account-icon/account-icon.component';
import { ValidIconComponent } from './valid-icon/valid-icon.component';
import { EyeIconComponent } from './eye-icon/eye-icon.component';
import { EyeHideIconComponent } from './eye-hide-icon/eye-hide-icon.component';
import { SearchIconComponent } from './search-icon/search-icon.component';



@NgModule({
  declarations: [
    DangerComponent,
    CartComponent,
    FavouritesIconComponent,
    MenuIconComponent,
    SearchIconComponent,
    FeryeLogoDarkComponent,
    AccountIconComponent,
    ValidIconComponent,
    EyeIconComponent,
    EyeHideIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DangerComponent,
    CartComponent,
    FavouritesIconComponent,
    MenuIconComponent,
    SearchIconComponent,
    FeryeLogoDarkComponent,
    AccountIconComponent,
    ValidIconComponent,
    EyeIconComponent,
    EyeHideIconComponent
  ]
})
export class IconsModule { }
