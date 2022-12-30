import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

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
  // NO SERVICE, ONLY FOR TESTING
  // Get data from jsonplaceholder
  getData(): any {
    const url = 'https://jsonplaceholder.typicode.com/photos'
    this.http.get<any>(url).subscribe((response: any) => {

      if (response) {
        this.hideloader()
        // Transform response in array
        let result = Object.values(response)
        // Filtered array to get only 100 items
        this.data = result.filter((e: any, i: any) => {
          return i > 4900
        })
      }
    })
  }
  // Hide loader
  hideloader() {
    this.isLoading = "none"
  }

}
