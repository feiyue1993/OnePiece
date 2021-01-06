# 工厂方法模式

> 将实际创建对象的工作推迟到子类中

## 安全模式类
```
function Demo(){
    if(!this instanceof Demo){
        return new Demo();
    }
}
```

