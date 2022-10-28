import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeandcostService } from 'src/app/services/incomeandcost.service';
import { IncomeAndCost } from '../../models/accounting';

@Component({
  selector: 'app-add-cost-and-income',
  templateUrl: './add-cost-and-income.component.html',
  styleUrls: ['./add-cost-and-income.component.scss']
})
export class AddCostAndIncomeComponent implements OnInit {
  incomeCostModel: IncomeAndCost={}
  dataSource: Array<IncomeAndCost> = [];
  displayedColumns = ['description', 'amount', 'type'];
  constructor(private router: Router, private _incomeandcostService: IncomeandcostService) { }

  ngOnInit(): void {
    this.getCostAndIncomeList();
  }

  isValidate() {
    return Object.values(this.incomeCostModel).length === Object.keys(this.incomeCostModel).length
  }
  getCostAndIncomeList() {
    this._incomeandcostService.getIncomeAndsCostList().subscribe((resData: any) => {
      resData = resData.map((r: IncomeAndCost) => {
        r.headTypeName = r.headTypeId == 1 ? 'Income' : 'cost';
        return r;
      })
      this.dataSource = [...resData]

    })
  }
  save() {
    this._incomeandcostService.createIncomeAndCost(this.incomeCostModel).subscribe((resData: any) => {
      let { result } = resData;
      result.headTypeName = result.headTypeId == 1 ? 'Income' : 'cost';
      this.dataSource = this.dataSource.concat(...[{ ...result }]);
      this.incomeCostModel = {}
    })

  }
  goToCurrentBalance() {
    this.router.navigate(['current-balance'])
  }
}
