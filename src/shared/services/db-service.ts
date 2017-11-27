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
      }).catch(e => console.log(e));
    }

    /*
    editData():Promise<any> {
      return this.dbConnection()
        .then((db: SQLiteObject) => {
          return db.executeSql()
            .then(res => {
              console.log('editData => '+res);    
            });
        });
    }
    */

    saveData(timer:Timer):Promise<any> {
      return this.dbConnection()
      .then((db: SQLiteObject) => {
        return db.executeSql('INSERT INTO timers VALUES(NULL,?,?,?)',[timer.title, timer.initialDuration, timer.remainingDuration])
          .then(res => {
            console.debug('saveData => '+res);
          });
      });
    }

    deleteData(id):Promise<any> {
      return this.dbConnection()
      .then((db: SQLiteObject) => {
        return db.executeSql('DELETE FROM timers WHERE rowid=?', [id])
          .then(res => {
            console.debug('deleteData => '+res);
          })
          .catch(e => console.log(e));
      });
    }      
}