import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable()
export class SignupService {
  mailchimpListID = environment.mailchimpListID;
  mailChimpEndpoint = `https://us10.list-manage.com/subscribe/post-json?u=c8aaf42a2cdc814b8adc67ecc&id=${this.mailchimpListID}&`;

  constructor(private http: HttpClient) { }
  signup(data) {
    const params = new HttpParams()
      .set('EMAIL', data.EMAIL)
      .set('FNAME', data.FNAME)
      .set('MMERGE2', data.MMERGE2)
      .set('subscribe', 'Subscribe')
      .set('c', 'jQuery19008372275431850826_1528827280799')
      .set('_', `${Date.now()}`)
      .set('PRIVACYPOL', data.PRIVACYPOL)     
    const mailChimpUrl = this.mailChimpEndpoint + params.toString();

    // return this.http.post(`https://us10.list-manage.com/subscribe/post?u=c8aaf42a2cdc814b8adc67ecc&amp;id=${this.mailchimpListID}`,data)
    // return this.http.jsonp(`https://us10.api.mailchimp.com/3.0/lists`, data)
    return this.http.jsonp(mailChimpUrl, 'c')
      .pipe(catchError((er) => of(er)));
  }

}
