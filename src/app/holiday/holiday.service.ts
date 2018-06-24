import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { BackendService } from '../_services'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { IHoliday, ICategory } from './holiday';

@Injectable()
export class HolidayService {
    private baseUrl = 'products';

    constructor(private http: Http, private backend: BackendService) { }

    getHolidays(): Observable<IHoliday[]> {
        // return this.http.get(this.baseUrl)
        const url = `${this.baseUrl}`;
        return this.backend.getAll(url)
            .map(this.extractData)
            // .do(data => console.log('getHolidays: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getHoliday(id: number): Observable<IHoliday> {
        if (id === 0) {
            return Observable.of(this.initializeHoliday());
            // return Observable.create((observer: any) => {
            //     observer.next(this.initializeHoliday());
            //     observer.complete();
            // });
        };
        const url = `${this.baseUrl}/${id}/?_expand=category`;
        return this.backend.getById( url, id)
            .map(this.extractData)
            .do(data => console.log('getHoliday: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    deleteHoliday(id: number): Observable<Response> {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });

        const url = `${this.baseUrl}/${id}`;
        return this.backend.delete(url, id)
            // .do(data => console.log('deleteHoliday: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    saveHoliday(holiday: IHoliday): Observable<IHoliday> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.createHoliday(holiday, options);
    }

    getCategories(): Observable<ICategory[]> {
        // return this.http.get(this.baseUrl)
        const url = 'categories'
        return this.backend.getAll(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private createHoliday(holiday: IHoliday, options: RequestOptions): Observable<IHoliday> {
        holiday.id = undefined;
        console.log('holiday',holiday)
        return this.backend.create(this.baseUrl, holiday)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(response: Response) {
        let body = response.json ? response.json() : response;
        return body.data ? body.data : (body || {});
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeHoliday(): IHoliday {
        // Return an initialized object
        return {
            id: 0,
            avatar: null,
            categoryId: 0,
            holidayName: null,
            unitPrice: 0,
            // customerId: 0,
            unitInStock: 0,
            // isActive: false,
            // customer: null,
        };
    }
}
