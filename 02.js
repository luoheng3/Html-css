/**
 * Created by 14486 on 2019/3/29.
 */
/*
* 1: 样式初始化
*     *代表通配符选择器 页面中所有的元素
*     *{margin:0;padding:0;}
*     多元素选择器 同时选择多个元素
*         body,dl,dd,p,h1,h2,h3,h4,h5,h6{margin:0;}
*         ul,ol{margin:0;padding:0;list-style:none;}
*         a{text-decoration:none;}
*         img{border:none;}
* 2: 元素类型
*       块级元素：
*           1.自动换行
*           2.支持宽高
*           3.默认占据一行
*           4.可以套任何内容
*           5.支持margin 和 padding
*           常见的块级元素：
*               div p table h1-h6 ul li form
*           p标签不能套块级
*       行内元素:
*           不自动换行
*           不支持宽高
*           margin  支持左右  不支持上下
*           padding 支持左右  不支持上下  只对自身有效果
*           行内元素不能嵌套块级元素
*           常见的行内元素:
*               a span i del b
* 3: 元素类型的转换
*       display:block; 将元素转换成块级元素
*       display:inline; 转换成行内元素
*       display:none;   
*       display:inline-block;行内块级元素
*           以行内样式的形式排列(不会独占一行)  以块级元素的样式显示！
* 4: 外边距合并现象
*       当两个盒子之间没有内边距或边框分开始，
*       给里面的盒子加上外边距，会自动把外边距合并到外面的盒子上
*           解决方法：
*               加边框 给父级加
*               用padding 给父级加
*               overflow:hidden; 给父级加
*/