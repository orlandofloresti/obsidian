import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  IProduct,
  IViewListService,
} from 'src/app/common/interfaces/view-list';
import { PRODUCTOS } from 'src/assets/mocks/view-list.mock';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService implements IViewListService {
  constructor() {}

  getDataTable(): Observable<IProduct[]> {
    return of(PRODUCTOS);
  }
}
