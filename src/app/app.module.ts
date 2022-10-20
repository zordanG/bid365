import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ItemBoxComponent } from './components/item-box/item-box.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
// import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CustomButtonComponent,
    HomeComponent,
    LoginComponent,
    ItemBoxComponent,
    CarouselComponent,
    SignUpComponent,
    CustomFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // MatIconModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
