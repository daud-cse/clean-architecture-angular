import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpLocalService {
  public BASE_URL: string;
  constructor(

    public http: HttpClient,
    private router: Router,
  ) {
    this.BASE_URL = environment.client.base_url;


  }


  get(url: string) {
    return this.http.get(this.BASE_URL + url);
  }


  post(url: string, data: any) {
    return this.http.post(this.BASE_URL + url, data);
  }


}
