import { Injectable } from '@angular/core';
import { ArtistSummary, ArtistDetails } from 'src/app/shared';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  baseUrl = `${environment.apiUrl}/artists`;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<ArtistSummary[]> {
    return this.http.get<ArtistSummary[]>(`${this.baseUrl}.json`);
  }

  public getById(id: number): Observable<ArtistDetails> {
    return this.http.get<ArtistDetails>(`${this.baseUrl}/${id}.json`);
  }
}
