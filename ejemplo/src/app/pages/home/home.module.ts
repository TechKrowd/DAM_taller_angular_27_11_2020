import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, RouterModule],
    exports: [HomeComponent],
    providers: []
})
export class HomeModule{}