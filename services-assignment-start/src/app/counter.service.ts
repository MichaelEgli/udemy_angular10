export class CounterService {
    counter = 1;
    count(){
        console.log('hello', this.counter++);
    }
}