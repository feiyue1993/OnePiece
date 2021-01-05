/**
 *  简单工厂模式
 *  需要扩展的时候
 *  1. 创建扩展类
 *  2. 在工厂中添加扩展类
 */
function BMW(){
    this.drive = function(){
        console.log('drive BMW');
    }
}

function Benz(){
    this.drive = function(){
        console.log('drive Benz');
    }
}

function Factory(){
    this.getBMWCar = function(){
        return new BMW();
    }

    this.getBenzCar = function(){
        return new Benz();
    }
}

let f1 = new Factory();
f1.getBMWCar().drive();
f1.getBenzCar().drive();

/**
 * 工厂方法模式
 *
 */
