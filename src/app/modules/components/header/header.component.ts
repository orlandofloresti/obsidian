import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string = '';

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.title.subscribe((title) => (this.title = title));
  }
}
