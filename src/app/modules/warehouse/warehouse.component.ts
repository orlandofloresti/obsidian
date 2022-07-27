import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehouseComponent implements OnInit {
  products: any[] = [
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
    {
      code: 'string',
      name: 'string',
      category: 'string',
      quantity: 'string',
    },
  ];

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.setTitle('Almacén');
  }
}
