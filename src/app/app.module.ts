import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { MainComponent } from './components/main/main.component';
import { AddComponent } from './components/main/add/add.component';
import { CardComponent } from './components/main/card/card.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { EditComponent } from './components/main/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddComponent,
    CardComponent,
    SidebarComponent,
    EditComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
