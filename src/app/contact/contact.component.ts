import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, pipe, filter, of } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    class: "component-height"
  }
})
export class ContactComponent implements OnInit {
  public isLoading: string = "block";
  public data: any;
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getData()
  }
  getData(): any {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    this.http.get<any>(url).subscribe((response: any) => {
      if (response) {
        this.hideloader()
        this.data = response
      }
    })
  }
  hideloader() {
    return this.isLoading = "none"
  }

}
