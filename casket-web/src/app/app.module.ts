import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { BlockUIModule } from 'primeng/blockui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    TopbarComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    
    // Angular Material

    MatSlideToggleModule,

    // PrimeNG

    ButtonModule,
    CardModule,
    DividerModule,
    BlockUIModule,
    InputTextModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
