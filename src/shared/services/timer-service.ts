import { DBService } from './db-service';
import { Injectable } from '@angular/core';
import { Timer } from './../../shared/interfaces/timer.interface';

@Injectable()

export class TimerService {
    public timers: Timer[] = [];
    
    constructor(private dbService: DBService) { 
    }

    activeTimers():Promise<any> {
        return this.dbService.getData()
            .then(res => {
                this.timers = [];
                for(var i=0; i<res.rows.length; i++) {
                    var item = res.rows.item(i);
                    this.timers.push(<Timer>{id:item.rowid, title:item.title, initialDuration:item.initialDuration, remainingDuration:item.remainingDuration})
                }
                return this.timers;
            })
            .catch(e => console.log(e));
    }

    addTimer(timer:Timer):Promise<any> {
        return this.dbService.saveData(timer);
    }

    deleteTimer(timer:Timer):Promise<any> {
        return this.dbService.deleteData(timer.id)
            .then(res => {
                this.activeTimers();
            })
            .catch(e => console.log(e));
    }

    newTimer():Timer{
        let t = <Timer>{};
        t.id = 0;
		t.title = '';
		t.initialDuration = '';
		t.remainingDuration = '';
		return t;
	}
}