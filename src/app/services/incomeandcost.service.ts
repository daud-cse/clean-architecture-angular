import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncomeAndCost } from '../modules/features/accounting/models/accounting';
import { HttpLocalService } from './http-local.service';

@Injectable({
  providedIn: 'root'
})
export class IncomeandcostService {

  constructor(private httpLocal: HttpLocalService) { };

  createIncomeAndCost(incomeAndCost: IncomeAndCost) {
    const url = '/incomeAndCost'
    return this.httpLocal.post(url, incomeAndCost)

  }
  getIncomeAndsCostList() {
    const url = '/incomeAndCost'
    return this.httpLocal.get(url)

  }
}
