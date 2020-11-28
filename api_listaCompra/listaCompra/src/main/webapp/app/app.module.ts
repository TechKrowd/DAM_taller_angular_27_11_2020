import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { ListaCompraSharedModule } from 'app/shared/shared.module';
import { ListaCompraCoreModule } from 'app/core/core.module';
import { ListaCompraAppRoutingModule } from './app-routing.module';
import { ListaCompraHomeModule } from './home/home.module';
import { ListaCompraEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    ListaCompraSharedModule,
    ListaCompraCoreModule,
    ListaCompraHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    ListaCompraEntityModule,
    ListaCompraAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class ListaCompraAppModule {}
