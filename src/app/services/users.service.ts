import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USERS } from 'src/assets/mocks/view-list.mock';
import { IUser, IViewListService } from '../interfaces/view-list';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements IViewListService {
  constructor() {}

  getDataTable(): Observable<IUser[]> {
    return of(USERS);
  }
}
