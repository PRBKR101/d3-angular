import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GoogleTrendService {

  constructor(private http: HttpClient) { }

  getKeyWordTrend(keyWords): Observable<any> {
    console.log(keyWords);
    return this.http.get<any>('http://localhost:8080/api/googleTrends/' + keyWords)
    .pipe(
      map((response) => response.default.timelineData.map(timelineResponse => {
        return {
          date : new Date(timelineResponse.formattedAxisTime),
          trendValue: Number(timelineResponse.formattedValue[0])
        };
      }))
    );
  }
}
