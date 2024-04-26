import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IconsFilters } from '../models/iconsFilters.model';

@Injectable({
  providedIn: 'root',
})
export class IconFilterService {
  constructor(private _httpClient: HttpClient) {}

  getAllIconFilters(): Observable<Array<IconsFilters>> {
    return this._httpClient.get<Array<IconsFilters>>(
      '/assets/imgsFilters.json'
    );
  }

  addIconFilter(img: IconsFilters): Observable<IconsFilters> {

    const url = '/assets/imgsFilters.json';
    return this._httpClient.post<IconsFilters>(url, img);
  }
}
