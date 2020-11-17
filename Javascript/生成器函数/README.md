# 生成器函数

## 描述
- 生成器函数在执行时能暂停,后面又能从暂停处继续执行

## 关键词
- function*
- yield
- 返回Generator对象
- yield*将执行权移交给其他生成器(当前生成器暂停执行)
- next返回两个属性:value（表示yield返回的值）和done（表示后续是否还有yield语句）
- next传入参数,参数将赋值给上一条yield语句左边的变量
- 显示返回,done变为true

## 使用场景
- 处理异步操作
- 控制流管理
- 部署iterator接口
- 作为数据结构
- 抽奖程序