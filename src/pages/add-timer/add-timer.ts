import { Timer } from './../../shared/interfaces/timer.interface';
import { TimerService } from './../../shared/services/timer-service';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
    selector: 'add-timer',
    templateUrl: 'add-timer.html'
})

export class AddTimer {
    public thisTimer: Timer;
    public addTimerForm: FormGroup;
    
    constructor(
        public navCtrl: NavController,
        private timerService: TimerService,
        private formBuilder: FormBuilder,
        private navParams: NavParams) {

        this.addTimerForm = this.formBuilder.group({
            title:[''],
            time:[''],
        });

        this.thisTimer = <Timer>this.navParams.get('theTimer');
    }

    saveEdits() {
        this.thisTimer.title = this.addTimerForm.get('title').value;
        this.thisTimer.initialDuration = this.addTimerForm.get('time').value;

        this.timerService.addTimer(this.thisTimer)
            .then(() => {
                this.navCtrl.pop();
            })
            .catch(e => console.debug(e));
    }
    
    cancel() {
        this.navCtrl.pop();
    }  
}