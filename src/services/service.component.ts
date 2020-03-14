import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ShortenURL {

    constructor(private http: HttpClient) {}

    getURL(URL: string): Observable<any> {
        return this.http.post('https://api-ssl.bitly.com/v4/shorten', 
            JSON.stringify({
                long_url: URL
            }),
            {
                headers: new HttpHeaders({
                    'Host': 'api-ssl.bitly.com',
                    'Content-Type':  'application/json',
                    'Authorization': 'Bearer edc9544b2f6a8dcf0e9f35b5f5391b2db3bfa318'
                })  
            }
        );
    }
}