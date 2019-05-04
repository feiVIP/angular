import { Component, OnInit,Output,EventEmitter } from '@angular/core';
// EventEmitter  事件驱动
@Component({
  selector: 'app-son1',
  templateUrl: './son1.component.html',
  styleUrls: ['./son1.component.css']
})
export class Son1Component implements OnInit {
  @Output() public outer = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendData(){
    alert(1)
    this.outer.emit('我是子组件的数据')
  }
}
