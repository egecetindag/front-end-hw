import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { ButtonComponent } from './components/button/button.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { AdvantageItemComponent } from './components/advantage-item/advantage-item.component';
import {AccountComponent} from './components/account/account.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ButtonComponent,
    AdvantagesComponent,
    AdvantageItemComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
