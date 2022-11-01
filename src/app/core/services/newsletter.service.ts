import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private http: HttpClient) { }

  // addToList --> post to Mailchimp
  addToList(email: string) {
    return this.http.post<any>("", email);
  }


}
