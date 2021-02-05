import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
 
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { BlockUIModule } from 'primeng/blockui';
import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'primeng/carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
    LoginComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    
    // Angular Material

    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatRippleModule,

    // PrimeNG

    ButtonModule,
    CardModule,
    DividerModule,
    BlockUIModule,
    InputTextModule,
    AccordionModule,
    CarouselModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
