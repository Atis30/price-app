import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceindexComponent } from './priceindex/priceindex.component';
import { PricelistService } from './priceindex.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplaypriceComponent } from './displayprice/displayprice.component';
import { DisplayService } from './display.service';

@NgModule({
  declarations: [AppComponent, PriceindexComponent, DisplaypriceComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PricelistService, DisplayService],
  bootstrap: [AppComponent],
})
export class AppModule {}
