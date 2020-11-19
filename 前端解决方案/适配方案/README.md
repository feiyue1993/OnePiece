# 响应式布局方案

- 响应式布局概念
- 传统布局
- 相对单位布局
- 媒体查询
- 基于相对单位的rem布局
- flex布局
- grid布局
- 借助javascript布局

## 响应式布局概念
- 屏幕分辨率
- 像素
- PPI(Pixel Per Inch)： 每英寸包括的像素数
- DPI(Dot Per Inch): 每英寸包括的像素点
- 设备独立像素
- 设备像素比(dpr) 设备物理像素和设备独立像素的比例
- meta viewport

## 常见的响应式布局问题
- 1px问题
- 适配iphonex齐刘海
- 图片自适应

## %问题
- position: absolute的% (left相对于父元素的width,top相对于父元素的height)
- position: relative的% (left相对于自身的width,top相对于自身的height)
- position: fixed的%	(left相对于视口的width,top相对于视口的height)
- margin和padding的%	(相对于父元素的宽度)
- text-indent的%		(相对于父元素的宽度)
- font-size的%			(相对于父元素的字体大小换算)
- border-radius的%		(相对于自身宽高)
- background-size的%	(相对于自身宽高)
- transform的%			(相对于自身宽高)
- line-height的%		(相对于该元素的font-size数值)

## 传统布局
- 多栏布局

## 相对单位布局
- 相对单位
	* em(相对于当前元素或者是当前元素继承来的字体宽度)
		+ 应用在font-size属性上是相对于父元素的字体大小
		+ 应用在line-height上,是相对与当前元素的字体大小
	* rem(相对于跟节点的字体大小)
	* vh、vw、vmin、vmax
		+ vw(相对于视口宽度)
		+ vh(相对于视口高度)
		+ vmin(视口宽高中的较小值)
		+ vmax(视口宽高中的较大值)
	* %
	* calc()(响应式布局计算单位)

## 媒体查询
## 基于相对单位的rem布局
## flex布局
## grid布局
## 借助javascript布局


## 屏幕适配方案
- 媒体查询Media Queries
	* 优点
		+ 移动和PC维护同一套代码
		+ 图片便于修改,只需要修改css文件
		+ 调整屏幕宽度的时候不用刷新页面
	* 缺点
		+ 代码量比较大,维护不方便
		+ 为了兼顾大屏幕,会造成其他设备资源浪费
		+ 兼顾移动端和PC端的展示效果,难免会损失交互方式
		
- flex弹性布局
	* 固定viewport的宽度等于设备宽度,高度自适应,元素采用px做单位
	* 主要应用于移动端

- rem+viewport
	* 根据屏幕宽度设定rem值,需要适配的元素都使用rem为单位,不需要适配的还是使用px为单位
	* 根据rem将页面放大dpr倍
	* viewport设为1/dpr
	* 弊端: rem用在字号时,使字号在不同屏幕上的绝对尺寸不一致

- vw适配
	* postcss-px-to-viewport
	* postcss-aspect-ratio-mini
	* 弊端vw在一些三星机子会有兼容问题
	
- flexible.js
	* 通过js动态改写标签
	* 给元素添加data-dpr属性,并且动态改写data-dpr的值
	* 给元素添加font-size属性,并且动态改写font-size的值
	* 局限性
		+ 不能与响应式布局兼容
		+ 对android没有做处理,导致1px和backgroundImage还要额外做处理

## 1px解决方案
	- background渐变
		* 渐变在透明色和边框色中间分割
		* 优点
			+ 可以实现单条,多条边框
			+ 边框颜色随意设置
		* 缺点
			+ 代码量多
			+ 圆角没法实现
			+ 多背景图片有兼容性问题
	
	- background-image实现	
		* 优点
			+ 可以设置单条,多条边框
			+ 没有性能瓶颈问题
		* 缺点
			+ 边框颜色修改不方便,修改颜色麻烦,需要替换颜色
			+ 圆角需要特殊处理,并且边缘会模糊
	
	- 使用box-shadow模拟边框
		* 缺点
			+ 颜色不便控制,太淡,有虚边

	- viewport+rem实现
	
	- 伪类（:before :after）+transform实现
		* 优点
			+ 所有场景都能满足
			+ 支持圆角(伪类和本体类都要加圆角)
		* 缺点
			+ 占用了伪类,容易和原样式冲突
			+ 对于已经实现伪类的元素,需要多层嵌套
			+ 对单个元素的边框进行缩放的方案无法实现圆角

## rem小数问题
	浏览器在处理小数像素的时候不是使用舍入处理的,rem是使用舍入处理的,经常会造成小数像素背景图被裁掉一部分
	- 使用iconfont
	- 为图片设置一定的空白间隙

## 高清图问题
## 