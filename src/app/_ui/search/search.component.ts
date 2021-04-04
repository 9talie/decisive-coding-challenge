import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/_services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public search = new FormControl('');

  constructor(private searchService : SearchService) { }

  ngOnInit(): void {
    this.search.setValue(this.searchService.searchedItem);
  }

  onSearch(){
    this.searchService.searchedItem  = this.search.value;
  }

  onSearchCleared(){
    this.searchService.clearSearch();
    this.search.reset(); 
  }



}
