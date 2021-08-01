import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivreComponent } from './livre/livre.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateLivreComponent } from './create-livre/create-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
/*import { LoginComponent } from './login/login.component';
import { RestapiService } from './restapi.service';
import { HomeComponent } from './home/home.component';*/

@NgModule({
  declarations: [
    AppComponent,
    LivreComponent,
    CreateLivreComponent,
    UpdateLivreComponent,
    /*LoginComponent,
    HomeComponent*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
