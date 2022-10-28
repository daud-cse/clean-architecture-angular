import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCostAndIncomeComponent } from './modules/features/accounting/components/add-cost-and-income/add-cost-and-income.component';
import { CurrentBalanceViewComponent } from './modules/features/accounting/components/current-balance-view/current-balance-view.component';
import { IncomeCostGraphViewComponent } from './modules/features/accounting/components/income-cost-graph-view/income-cost-graph-view.component';
import { HeaderComponent } from './modules/core/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModules } from './models/material';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddCostAndIncomeComponent,
    CurrentBalanceViewComponent,
    IncomeCostGraphViewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ...MaterialModules
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
