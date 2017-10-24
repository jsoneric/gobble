import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'add-timer',
    templateUrl: 'add-timer.html'
})

export class AddTimer {

    constructor(public navCtrl: NavController) {

    }

    saveEdits() {
        
    }
    
    cancel() {
        this.navCtrl.pop();
    }  
}