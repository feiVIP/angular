import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {

  @Input() title:any;
  @Input() msg:any;
  @Input() run:any;
  @Input() home:any;


  public  sondata:any = '子组件的数据';
  sendfather(){
    alert('我是传递给父组件的方法');
  }

  constructor() { }

  ngOnInit() {
  }


  getParentMsg(){
    alert(this.msg);
  }

  getParentRun(){
    // this.run();
    alert(this.home.msg);
    this.home.run();
  }


}
