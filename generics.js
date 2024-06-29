// to reuse a class that limits type stored BUT allow flexibility to change the type being filtered we use generics by adding the <T> placeholder  
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    // setting the add param data type to match the set input type
    Queue.prototype.add = function (item) {
        this.data.push(item);
    };
    Queue.prototype.remove = function () {
        this.data.shift();
    };
    return Queue;
}());
var nameQueue = new Queue();
nameQueue.add('luis');
nameQueue.add('andrei');
var numberQueue = new Queue();
numberQueue.add(10);
numberQueue.add(11);
