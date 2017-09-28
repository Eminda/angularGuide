import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import "rxjs/add/operator/takeWhile";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, OnDestroy {

  object: any;
  alive = true;
  subscription: Subscription;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.alive = false;
    this.subscription.unsubscribe();
  }

  requestGet() {
    this.httpClient.get('http://httpbin.org/headers').subscribe(data => {
      // Read the result field from the JSON response.
      this.object = data['headers'];
    });
  }

  requestPost() {
    this.httpClient.post('http://httpbin.org/post', {}).takeWhile(() => this.alive).subscribe(data => {
      // Read the result field from the JSON response.
      this.object = data['headers'];
    });
  }

  requestGetUnsubscribeWay() {
    this.subscription = this.httpClient.get('http://httpbin.org/headers').subscribe(data => {
      // Read the result field from the JSON response.
      this.object = data['headers'];
    });
    // const sub = this.httpClient.get('http://httpbin.org/headers').subscribe(data => {
    //   // Read the result field from the JSON response.
    //   this.object = data['headers'];
    // });
    // this.subscription.add(sub);
  }

}
