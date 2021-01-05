# [block formatting context]块级格式化上下文

> 如果一个元素具有BFC,那么它的内部子元素再怎么翻江导海,都不会影响外部的元素.

## bfc的作用
- 清楚margin重叠

## 触发bfc的条件
- html根元素
- float的值不为none
- overflow的值为auto、scroll或者hidden
- display的值为table-cell、table-caption和inline-block中的任何一个
- position的值不为relative和static