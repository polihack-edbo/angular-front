import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {JwtService} from './services/jwt/jwt.service';
import {AuthGuard} from './guards/auth.guard';
import {AuthService} from './services/auth/auth.service';
import {InterceptorProvider} from './security/interceptor.index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    JwtService,
    AuthGuard,
    AuthService,
    InterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
