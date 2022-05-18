import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URL_API = 'https://digimon-api.vercel.app/api/digimon';
  constructor(private http: HttpClient) {}

  obtnerDatos() {
    return this.http.get<any>(this.URL_API).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
