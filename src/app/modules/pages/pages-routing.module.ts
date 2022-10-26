import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { OurWorldComponent } from './our-world/our-world.component';
import { ProductsProtectionComponent } from './products-protection/products-protection.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'our-world', component: OurWorldComponent },
    { path: 'products-protection', component: ProductsProtectionComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }