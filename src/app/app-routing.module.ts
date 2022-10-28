import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCostAndIncomeComponent } from './modules/features/accounting/components/add-cost-and-income/add-cost-and-income.component';
import { CurrentBalanceViewComponent } from './modules/features/accounting/components/current-balance-view/current-balance-view.component';
import { IncomeCostGraphViewComponent } from './modules/features/accounting/components/income-cost-graph-view/income-cost-graph-view.component';

const routes: Routes = [
  {
    path: "", component: AddCostAndIncomeComponent,

  },
  {
    path: "cost-income", component: AddCostAndIncomeComponent,

  },
  {
    path: "current-balance", component: CurrentBalanceViewComponent,

  },
  {
    path: "cost-income-graph", component: IncomeCostGraphViewComponent,

  },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
