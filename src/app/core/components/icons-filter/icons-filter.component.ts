import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IconsFilters } from '../../models/iconsFilters.model';
import { IconFilterService } from '../../services/icon-service.service';

@Component({
  selector: 'airbnb-icons-filter',
  templateUrl: './icons-filter.component.html',
  styleUrls: ['./icons-filter.component.scss'],
  providers: [HttpClient],
})
export class IconsFilterComponent implements OnInit {
  iconsFilters: IconsFilters[] = [];

  constructor(private iconFilterService: IconFilterService) {}

  ngOnInit(): void {
    this.getIconsFilter();
    
  }

  getIconsFilter() {
    this.iconFilterService
      .getAllIconFilters()
      .pipe(tap(console.log))
      .subscribe((icons) => (icons = this.iconsFilters = icons));
  }

  addIconsFilter() {
    const img = {
      name: 'prueba',
      title: 'prueba',
      alt: 'prueba',
    };
    this.iconFilterService.addIconFilter(img).subscribe(res => console.log(res));
  }
}
