import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeandcostService } from 'src/app/services/incomeandcost.service';
import { IncomeAndCost } from '../../models/accounting';

@Component({
  selector: 'app-current-balance-view',
  templateUrl: './current-balance-view.component.html',
  styleUrls: ['./current-balance-view.component.scss']
})
export class CurrentBalanceViewComponent implements OnInit {
  totalIncome = 0;
  totalCost = 0;
  currentBalance = 0;
  constructor(private router: Router, private _incomeandcostService: IncomeandcostService) { }
  ngOnInit(): void {
    this.getCostAndIncomeList();
  }
  getCostAndIncomeList() {
    this._incomeandcostService.getIncomeAndsCostList().subscribe((resData: any) => {
      resData = resData.map((r: IncomeAndCost) => {
        if (r.headTypeId == 1) {
          this.totalIncome = this.totalIncome + r.amount;
        }
        else if (r.headTypeId == 2) {
          this.totalCost = this.totalCost + r.amount;
        }
        return r;
      })
      this.currentBalance = this.totalIncome - this.totalCost;

    })
  }
}
