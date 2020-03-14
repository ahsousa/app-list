import { Injectable }           from '@angular/core';
import { HttpClient }           from '@angular/common/http';
import { Observable }           from 'rxjs';
import { tap }                  from 'rxjs/operators';
import { IApp }                 from '../interfaces/iapp';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = '../../../assets/apps.json';

  constructor(private http: HttpClient) { }

  getApps(): Observable<IApp[]> {
    return this.http.get<IApp[]>(this.url).pipe(tap(apps => console.log(apps)));
  }
}
