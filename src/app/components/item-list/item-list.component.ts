import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './../item/item.component';
import { ItemService } from '../../_services/item.service';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent {
  itemService = inject(ItemService);
  items = this.itemService.items;
}
