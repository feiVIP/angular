import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public peopleInfo: any = {
    username: '',
    sex: '2',
    cityList: ['北京', '上海', '深圳'],
    city: '上海',
    hobby: [{
      title: '吃饭',
      checked: false
    }, {
      title: '睡觉',
      checked: false
    }, {
      title: '打豆豆',
      checked: true
    }],
    mark: ''
  }

  constructor() {
  }

  ngOnInit() {
  }

  getData() {
    alert(JSON.stringify(this.peopleInfo))
  }
}
