import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberConverterService {

    private readonly url = 'http://localhost:8080/api/number-converters';

    constructor(private readonly http: HttpClient) {
    }

    public convert(data: string): Observable<string> {
        const headers = this.getHeaders();

        return this.http.post<any>(`${this.url}/convert`, data, {headers})
        .pipe(
            map(response => response.value ),
        );
    }

    private getHeaders() {
        return new HttpHeaders({
            'Content-Type': 'application/json'
        });
    }
}
