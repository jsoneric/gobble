import { Timer } from './../../shared/interfaces/timer.interface';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'edit-timer',
  templateUrl: 'edit-timer.html'
})
export class EditTimer {
  public timer: Timer;
  public title: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.timer = this.navParams.get('timer');
      this.title = this.timer.title;
  }

  saveEdits() {
    this.navCtrl.pop();
  }
}