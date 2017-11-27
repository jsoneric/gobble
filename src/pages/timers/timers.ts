import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditTimer } from './../edit-timer/edit-timer';
import { AddTimer } from './../add-timer/add-timer';
import { TimerService } from './../../shared/services/timer-service';
import { Timer } from './../../shared/interfaces/timer.interface';
import { ItemSliding } from 'ionic-angular/components/item/item-sliding';

@Component({
  selector: 'timers',
  templateUrl: 'timers.html'
})

export class Timers {
  public timers: Timer[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private timerService: TimerService) {
  }

  ionViewWillEnter() {
    this.loadActiveTimers()
  }

  loadActiveTimers() {
    this.timerService.activeTimers()
      .then((res) => {
        this.timers = res;
      });
  }

  public addTimer(){
    this.navCtrl.push(AddTimer, {'theTimer': this.timerService.newTimer()});
  }

  public editTimer(timer) {
    this.navCtrl.push(EditTimer, {'timer': timer});
  }

  public deleteTimer(timer) {
    this.timerService.deleteTimer(timer)
      .then(() => {
        this.loadActiveTimers();
      });
  }

  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }

}