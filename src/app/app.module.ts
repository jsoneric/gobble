import { DBService } from './../shared/services/db-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Timers } from '../pages/timers/timers';
import { EditTimer } from '../pages/edit-timer/edit-timer';
import { AddTimer } from '../pages/add-timer/add-timer';
import { TimerService } from '../shared/services/timer-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';


@NgModule({
  declarations: [
    MyApp,
    Timers,
    EditTimer,
    AddTimer
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Timers,
    EditTimer,
    AddTimer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TimerService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DBService
  ]
})
export class AppModule {}
