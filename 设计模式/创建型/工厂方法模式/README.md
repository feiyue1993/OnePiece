# 工厂

# 构建方法

# 静态构建（或工厂）方法

# 简单工厂

# 工厂方法

# 抽象工厂

| 概念 | 说明 |
| --- | --- |
| 工厂 | 创建一些东西的函数、方法或类 |
| 构建方法 | 创建对象的方法(构建函数调用的封装器) |
| 静态构建方法 | 被声明为static的构建方法(无需创建对象在某个类上调用) |
| 简单工厂模式 | 拥有一个包含大量条件语句的构建方法,可根据方法的参数来选择对某种产品进行初始化 |
| 工厂方法模式 | 在父类中提供一个创建对象的方法,允许子类决定实例化对象的类型 |
| 抽象工厂模式 | 创建一系列相关或相互依赖的对象


# 工厂模式的角色
- 抽象工厂类
- 具体工厂类
- 抽象产品类
- 具体产品类