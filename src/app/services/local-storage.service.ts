import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { of } from 'rxjs';

// key that is used to access the data in local storage
const STORAGE_KEY = 'costsheet';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // anotherTodolist = [];
  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public storeOnLocalStorage(costsheetId: string): void {

       // get array of tasks from local storage
       const costsheetList = this.storage.get(STORAGE_KEY) || [];
       // push new task to array
       costsheetList.push({
           id: costsheetId
       });
       // insert updated array to local storage
       this.storage.set(STORAGE_KEY, costsheetList);
       console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }

  public getFullLocalStorage() {
    const costsheetList = this.storage.get(STORAGE_KEY) || [];
    return of(<Array<any>>costsheetList);
  }

  public clearStorage(): void {
    this.storage.clear();
  }

  public removeFromLocalStorage(costsheetId: string): void {
    const costsheetList = this.storage.get(STORAGE_KEY) || [];
    costsheetList.pop({
        id: costsheetId
    });
     this.storage.set(STORAGE_KEY, costsheetList);
  }

  public countObjLocalStorage() {
    const costsheetList = this.storage.get(STORAGE_KEY) || [];
    return <Array<any>>costsheetList.length;
  }
}
