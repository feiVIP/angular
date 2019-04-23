import { Component, OnInit ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  /*
 * 声明属性的几种方式
 * 1、public  公共的 可以在自己的类以及其他的类里面使用
 *
 * 2、private 私有的 只有在当前的类里面才可以访问这个属性
 *
 * 3、protected 保护的  只有在当前类以及他的子类里面使用
 *
 */
  @ViewChild('sun') sun:any;
  @ViewChild('domapp') domapp:any;

  public title:string = 'angular'
  public list:Array<any> = [123,'abc',true]
  public list1:any[] = ['aaa','bbb',111]
  public flags:boolean = false
  public status:number = 3 // 1下单 2交易进行中 3交易完成
  public attr:string = 'pink'
  public obj:object = {'name':'张三','age':20 }
  public tpl:any = "<h1>定义HTML模板</h1>"

  constructor() { }

  ngOnInit() {
  }

  btn(){
    alert('你点了我一下')
  }

  getsunbtn(){
    this.sun.clickBtn();
  }

  ngAfterViewInit(){
    console.log(this.domapp.nativeElement.style.color='red')
  }
}
