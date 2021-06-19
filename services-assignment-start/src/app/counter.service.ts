import { EventEmitter } from "@angular/core";

export class CounterService {
    counter = 0;
    count(){
        this.counter++;
        console.log('Counter', this.counter);
    }
}