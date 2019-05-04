import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-tongxun',
  templateUrl: './tongxun.component.html',
  styleUrls: ['./tongxun.component.css']
})
export class TongxunComponent implements OnInit {

  @ViewChild('son') son:any;
  public title:string="首页组件的标题";
  public msg:string='我是父组件的msg';
  constructor() { }

  ngOnInit() {
  }

  run(e){
    alert('我是父组件的run方法');
    console.log(e); // 子组件给父组件广播的数据  $event 事件对象
  }

  getSondata(){
    this.son.sendfather();
  }

}
/*
* 父组件给子组件传值的步骤
*
* 1、父组件调用子组件的时候传入数据
* 2、子组件引入 Input 模块
* 3、子组件中 @Input 接收父组件传过来的数据
* 4、子组件中使用父组件的数据
* 5、父组件不仅可以给子组件传递简单的数据,还可把自己的方法以及整个父组件传给子组件
*
* */


/*
* 子组件给父组件传值的步骤  方法一
*
* 1、在子组件上面写一个名字 #xxx
* 2、在父组件引入ViewChild 装饰器  @ViewChild('son') son:any;
* 3、通过实例调用子组件的数据或者方法
* */

/*
* 子组件给父组件传值的步骤  方法二
*
* 1、在子组件引入Output,EventEmitter
* 2、在子组件new一个实例@Output() public outer = new EventEmitter();
* 3、触发并广播给父组件
* */
