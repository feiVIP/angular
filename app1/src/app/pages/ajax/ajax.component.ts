import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  listData: any = [];
  constructor(public http: HttpClient) { }

  ngOnInit() {
    const api = 'http://a.itying.com/api/productlist'
    // tslint:disable-next-line:variable-name
    this.http.get(api).subscribe((response: any) => {
      this.listData = response.result;
      console.log(response);
    });
  }

}
