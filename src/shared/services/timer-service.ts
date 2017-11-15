import { DBService } from './db-service';
import { Injectable, Component } from '@angular/core';
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
                    this.timers.push(<Timer>{id:res.rows.item(i).rowid, title:res.rows.item(i).title, initialDuration:res.rows.item(i).initialDuration, remainingDuration:res.rows.item(i).remainingDuration})
                }
                console.debug(this.timers);
                return this.timers;
            })
        .catch(e => console.log(e));
    }

    addTimer(timer:Timer):Promise<any> {
        return this.dbService.saveData(timer);
    }

    deleteTimer(removeId) {
        this.timers = this.timers.filter(timer => timer.id != removeId)
        return this.timers;
    }

    newTimer():Timer{
        let t = <Timer>{};
        t.id = 0;
		t.title = '';
		t.initialDuration = '';
		return t;
	}
}