function createBook(name, time, type){
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    o.getName = function(){
        console.log(this.name);
    }
    return name;
}