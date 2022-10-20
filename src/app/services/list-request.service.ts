import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ItemAgenda } from '../models/ItemAgenda.model';
import { API_PATH, API_GET_LIST_TOKEN } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListRequestService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    app: `${API_GET_LIST_TOKEN}`
  });
    
  private requestOption = { 'headers': this.headers };

  constructor(private http: HttpClient) { }

  getAgendaItems(): Observable<ItemAgenda[]> {
    return this.http.get<ItemAgenda[]>(`${API_PATH}auctions`, this.requestOption);
  }
}
