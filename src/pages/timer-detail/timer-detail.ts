import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'timer-detail',
  templateUrl: 'timer-detail.html'
})
export class TimerDetail {
  public timer: any;
  public title: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
      this.timer = this.navParams.get('timer');
      this.title = this.timer.title;
  }

  saveEdits() {
    
  }

  cancel() {
    this.navCtrl.pop();
  }  
}
