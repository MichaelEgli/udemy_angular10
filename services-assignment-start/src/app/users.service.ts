import { Injectable, EventEmitter } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {
    activeUsers = [{ name: 'Max1' }, { name: 'Anna1' }];
    inactiveUsers = [{ name: 'Chris1'}, { name: 'Manu1' }];

    userSetToInactive = new EventEmitter<number>();
    userSetToActive = new EventEmitter<number>();

    constructor(private counterService: CounterService) {}

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.count();
    }
    
    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.count();
    }
}
