// to reuse a class that limits type stored BUT allow flexibility to change the type being filtered we use generics by adding the <T> placeholder  
class Queue<T> {
    private data: T[] = [];
// setting the add param data type to match the set input type
    add(item: T) {
        this.data.push(item);
    }

    remove() {
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('luis');
nameQueue.add('andrei');

const numberQueue = new Queue<number>();
numberQueue.add(10);
numberQueue.add(11);