import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Item } from '../_models/item.model';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  http = inject(HttpClient);

  items = signal<Item[] | null>(null);
  items$ = this.http.get<Item[]>('assets/items.json').pipe(
    tap((res) => this.items.set(res)),
    tap(() => console.log('FETCHING'))
  );
  // readMeItems = toSignal(this.items$);

  readOnlyItems = toSignal(this.items$);
}
