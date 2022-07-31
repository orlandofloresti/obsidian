import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTOS } from 'src/assets/mocks/view-list.mock';
import { IProduct, IViewListService } from '../interfaces/view-list';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService implements IViewListService {
  constructor() {}

  getDataTable(): Observable<IProduct[]> {
    return of(PRODUCTOS);
  }
}
