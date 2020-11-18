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