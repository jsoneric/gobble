import { Timer } from './../interfaces/timer.interface';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()

export class DBService {
    constructor(private sqlite: SQLite) {

    }

    private dbConnection():Promise<any> {
        return this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
          });
    }

    getData():Promise<any> {
        return this.dbConnection()
            .then((db: SQLiteObject) => {
                db.executeSql('CREATE TABLE IF NOT EXISTS timers(title TEXT, initialDuration DATETIME, remainingDuration DATETIME)', {})
                .then(res => console.log('Executed SQL'))
            .catch(e => console.log(e));
          
          return db.executeSql('SELECT * FROM timers ORDER BY remainingDuration', {});
          
          /*
          db.executeSql('SELECT SUM(amount) AS totalIncome FROM expense WHERE type="Income"', {})
            .then(res => {
                if(res.rows.length>0) {
                this.totalIncome = parseInt(res.rows.item(0).totalIncome);
                this.balance = this.totalIncome-this.totalExpense;
                }
            })
          .catch(e => console.log(e));
          
          db.executeSql('SELECT SUM(amount) AS totalExpense FROM expense WHERE type="Expense"', {})
          .then(res => {
            if(res.rows.length>0) {
              this.totalExpense = parseInt(res.rows.item(0).totalExpense);
              this.balance = this.totalIncome-this.totalExpense;
            }
          })
          */
        }).catch(e => console.log(e));
      }

      saveData(timer:Timer):Promise<any> {
        return this.dbConnection()
        .then((db: SQLiteObject) => {
          return db.executeSql('INSERT INTO timers VALUES(NULL,?,?,?)',[timer.title, timer.initialDuration, timer.remainingDuration])
            .then(res => {
              console.log(res);
            });
        });
    }
}