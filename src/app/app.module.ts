import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ToUpperDirective } from './Directives/to-upper.directive';
import { DeleteDigitsPipePipe } from './Pipes/delete-digits-pipe.pipe';
import { MyApiComponent } from './my-api/my-api.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    ToUpperDirective,
    DeleteDigitsPipePipe,
    MyApiComponent
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
