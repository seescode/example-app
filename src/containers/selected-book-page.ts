import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers';
import { AddBook, RemoveBook } from '../actions/collection';
import { BookInput, InCollectionInput, AddOutput, RemoveOutput } from '../components/book-detail';


@Component({
  selector: 'bc-selected-book-page',
  template: `
    <bc-book-detail
      [book]="book$ | async"
      [inCollection]="isSelectedBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </bc-book-detail>
  `
})
export class SelectedBookPageComponent {
  book$: Observable<BookInput>;
  isSelectedBookInCollection$: Observable<InCollectionInput>;

  constructor(private store: Store<fromRoot.State>) {
    this.book$ = store.let(fromRoot.getSelectedBook);
    this.isSelectedBookInCollection$ = store.let(fromRoot.isSelectedBookInCollection);
  }

  addToCollection(book: AddOutput) {
    this.store.dispatch(new AddBook(book));
  }

  removeFromCollection(book: RemoveOutput) {
    this.store.dispatch(new RemoveBook(book));
  }
}
