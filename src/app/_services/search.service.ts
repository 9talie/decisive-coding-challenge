import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _searchedItem:string; 

  constructor() { }

  get searchedItem(){
      return this._searchedItem
  }

  set searchedItem(searchedItem:string){
    this._searchedItem = searchedItem;
  }

  clearSearch(){
    this._searchedItem = "";
  }
}
