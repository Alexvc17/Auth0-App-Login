import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { CallbackComponent } from './components/callback/callback.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        // Import the module into the application, with configuration
        AuthModule.forRoot({
          domain: 'dev-pnxmr73vjwxz7yun.us.auth0.com',
          clientId: 'hF7y3JAFqvOm9M4xXXjvMmogMCL1xhRW',
          authorizationParams: {
            redirect_uri: 'http://localhost:4200/callback'
          }
        }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
