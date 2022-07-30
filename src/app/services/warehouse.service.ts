import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTOS } from 'src/assets/mocks/products.mock';
import { IProducts } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class WarehouseService {
  constructor() {}

  getProducts(): Observable<IProducts[]> {
    return of(PRODUCTOS);
  }
}
