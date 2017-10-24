import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TimerDetail } from './../timer-detail/timer-detail';
import { AddTimer } from './../add-timer/add-timer';

@Component({
  selector: 'timers',
  templateUrl: 'timers.html'
})

export class Timers {
  icons: string[];
  public timers: Array<{title: string, note: string, icon: string, clock: string}>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.timers = [];
    for (let i = 1; i < 11; i++) {
      this.timers.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        clock: i+':20'
      });
    }
  }

  public addNewTimer(){
    this.navCtrl.push(AddTimer);
  }

  public editTimer(timer) {
    this.navCtrl.push(TimerDetail, {'timer': timer});
  }
}
