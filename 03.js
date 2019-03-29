/**
 * Created by 14486 on 2019/3/29.
 */
/*
* 1: 选择器
*   ①: 元素选择器  选择页面中所有的div元素
*       div{width:300px;height:300px;background:red;}
*   ②: class选择器（类选择器）：
*       .boxLeft{background:blue;}
*       class在页面中可以出现多次 相当于一个人的名字
*   ③: id选择器：
*       #text{background:pink;}
*       在页面中只能出现一次  具有唯一性 并且权重值最高 相当于身份证
*   ④: 命令规范
*       1.不能以数字开头 不能使用特殊符号@#￥%
*       2.不能使用中文
*       3.以小写字母开头
*       4.见名知意
*       5. 可以使用下划线  中划线
*       6.驼峰命名法
* 2: 背景属性 background
*       复合属性
*       background:url('images/1.png') no-repeat center rgba(255,0,0,.5) fixed;
*           background-image:url('images/6.gif');
*           background-size:contain;
*           background-repeat:no-repeat;
*           background-position:center;
*           background-attachment:fixed; 背景关联
* */


/* 	background-color:#0a765b;
 通过对红绿蓝三种颜色的相互叠加产生各种各样的颜色！
 红：R red(0-255) 
 绿：G green (0-255) 
 蓝：B blue (0-255)
 透明度：A alpha （0-1）  支持小数点

 background-color:rgb(80,255,105);
 background-color:rgba(255,0,0,.5);

 背景图片

 background-image:url('images/1.png');

 背景重复的方式
 background-repeat:no-repeat;

 背景图片的位置 第一个值水平方向  第二个值垂直方向  当只有一个值的时候  第二个值默认是居中

 X Y
 具体的值 px
 百分比   根据元素框决定的
 关键词写法 top left right bottom	   居中：center
 background-position:50% 50%;
 */

/*
 复合属性：
 背景图片background-image 
 背景重复background-repeat 
 背景位置 background-position 
 背景颜色background-color  
 背景关联 background-attachment
 */