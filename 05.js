/**
 * Created by 14486 on 2019/3/29.
 */
/*
* 选择器高级
*   子元素选择器：选择div的直接子元素span
*       div > span{font-size:30px;color:red;}
*       div .box{}
*   选择紧跟p元素后面的同级元素 span
*       div p + p{font-size:100px;color:orange;}
*   属性选择器
*       匹配所有具有class属性的元素
*           [class]{font-size:50px;}
*       匹配所以具有class属性并且值  等于  box 的元素
*           [class='box']{font-size:60px;color:red;}
*
*       匹配所有具有class属性 并且值等于box 或者包含box的元素
*       包含的意思是一个属性多个值 其中一个值满足9
*           [class~='box']{color:blue;}
*       匹配所有具有class属性 并且值等于box 或者以  box-  "开头" 的元素
*           [class|='box']{font-weight:bold;color:orange;}
*       匹配 ul标签 下面的具有id属性并且具有class属性的值等于list 或者以list- 开头的元素
*          ul [id][class|='list']{background:red;}
* 伪类
*   未被点击的链接
*       a:link{color:orange;}
*   点击之后的链接
*       a:visited{color:blue;}
*   鼠标按下不松开运用样式
*       p:active{background:blue;}
*   鼠标划入应用样式
*       p:hover{background:orange;transform:rotate(360deg);
* 伪元素：
*   before:通过样式的方式在元素前面添加内容
*   after:通过样式的方式在元素后面添加内容
*       div:after{content:'太帅了';display:block;width:300px;height:300px;border:5px solid red;}
*   让所有a标签伪类样式实现顺序：
*       a:link{color:red;}
*       a:visited{color:orange;}
*       a:hover{color:#000;}
*       a:active{color:blue;}
*/