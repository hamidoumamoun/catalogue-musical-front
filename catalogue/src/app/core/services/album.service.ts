import { Injectable } from '@angular/core';
import { AlbumSummary, AlbumDetails } from 'src/app/shared';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  baseUrl = `${environment.apiUrl}/albums`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<AlbumSummary[]> {
    return this.http.get<AlbumSummary[]>(`${this.baseUrl}.json`);
  }

  public getById(id: number): Observable<AlbumDetails> {
    return this.http.get<AlbumDetails>(`${this.baseUrl}/${id}.json`);
  }

}
