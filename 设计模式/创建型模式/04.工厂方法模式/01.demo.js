function Factory(type, content){
    if(this instanceof Factory){
        return new this[type](content);
    }else{
        return new Factory(type, content);
    }
}

Factory.prototype = {
    Java: function(content){
        console.log('Java')
    },
    JavaScript: function(content){
        console.log('JavaScript')
    },
    UI: function(content){
        console.log('UI')
    },
    php: function(content){
        console.log('php')
    }
}