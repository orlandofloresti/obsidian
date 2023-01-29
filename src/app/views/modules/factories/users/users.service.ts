import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser, IViewListService } from 'src/app/common/interfaces/view-list';
import { USERS } from 'src/assets/mocks/view-list.mock';

@Injectable({
  providedIn: 'root',
})
export class UsersService implements IViewListService {
  constructor() {}

  getDataTable(): Observable<IUser[]> {
    return of(USERS);
  }
}
